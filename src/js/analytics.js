// Advanced Analytics and Progress Tracking System
class ProgressAnalytics {
    constructor(gameInstance) {
        this.game = gameInstance;
        this.analyticsData = this.loadAnalytics();
        this.initializeAnalytics();
    }

    loadAnalytics() {
        try {
            const stored = localStorage.getItem('dsa-analytics');
            return stored ? JSON.parse(stored) : this.getDefaultAnalytics();
        } catch (error) {
            console.error('Error loading analytics:', error);
            return this.getDefaultAnalytics();
        }
    }

    getDefaultAnalytics() {
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        
        return {
            sessionTimes: [
                { date: today, duration: 25 * 60 * 1000 }, // 25 minutes
                { date: yesterday, duration: 20 * 60 * 1000 }, // 20 minutes
            ],
            problemsSolvedByDate: {
                [today]: [],
                [yesterday]: [],
                [twoDaysAgo]: []
            },
            topicProgress: {},
            difficultyProgress: {
                easy: 0,
                medium: 0,
                hard: 0
            },
            studyStreak: 0,
            lastStudyDate: null,
            timeSpentCoding: 0,
            hintsUsed: 0,
            videosWatched: 0,
            favoriteTopics: {},
            learningVelocity: [],
            weeklyGoals: {
                problemsToSolve: 5,
                videosToWatch: 3,
                studyTimeMinutes: 120
            },
            achievements: {
                firstSolve: false,
                tenSolved: false,
                streakWeek: false,
                allEasy: false,
                speedSolver: false,
                theorist: false,
                coder: false
            }
        };
    }

    saveAnalytics() {
        try {
            localStorage.setItem('dsa-analytics', JSON.stringify(this.analyticsData));
        } catch (error) {
            console.error('Error saving analytics:', error);
        }
    }

    initializeAnalytics() {
        this.trackSession();
        this.updateStreak();
        this.createAnalyticsDashboard();
    }

    trackSession() {
        const sessionStart = Date.now();
        this.sessionStart = sessionStart;
        
        // Track session end on page unload
        window.addEventListener('beforeunload', () => {
            const sessionDuration = Date.now() - sessionStart;
            this.analyticsData.sessionTimes.push({
                date: new Date().toISOString().split('T')[0],
                duration: sessionDuration
            });
            this.saveAnalytics();
        });
    }

    trackProblemSolved(problemId, difficulty, timeSpent = 0) {
        const today = new Date().toISOString().split('T')[0];
        
        // Track daily progress
        if (!this.analyticsData.problemsSolvedByDate[today]) {
            this.analyticsData.problemsSolvedByDate[today] = [];
        }
        this.analyticsData.problemsSolvedByDate[today].push({
            problemId,
            difficulty,
            timeSpent,
            timestamp: Date.now()
        });

        // Track difficulty progress
        this.analyticsData.difficultyProgress[difficulty]++;

        // Update learning velocity
        this.updateLearningVelocity();

        // Check achievements
        this.checkAchievements();

        // Update last study date
        this.analyticsData.lastStudyDate = today;

        this.saveAnalytics();
        this.updateAnalyticsDashboard();
    }

    trackVideoWatched(problemId) {
        this.analyticsData.videosWatched++;
        this.saveAnalytics();
        this.updateAnalyticsDashboard();
    }

    trackHintUsed(problemId) {
        this.analyticsData.hintsUsed++;
        this.saveAnalytics();
        this.updateAnalyticsDashboard();
    }

    updateStreak() {
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        
        if (this.analyticsData.lastStudyDate === today) {
            // Already studied today, streak continues
            return;
        } else if (this.analyticsData.lastStudyDate === yesterday) {
            // Studied yesterday, increment streak
            this.analyticsData.studyStreak++;
        } else if (this.analyticsData.lastStudyDate && this.analyticsData.lastStudyDate < yesterday) {
            // Missed a day, reset streak
            this.analyticsData.studyStreak = 0;
        }
    }

    updateLearningVelocity() {
        const last7Days = Object.keys(this.analyticsData.problemsSolvedByDate)
            .filter(date => {
                const dateObj = new Date(date);
                const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
                return dateObj >= weekAgo;
            })
            .reduce((total, date) => total + this.analyticsData.problemsSolvedByDate[date].length, 0);

        this.analyticsData.learningVelocity.push({
            date: new Date().toISOString().split('T')[0],
            problemsPerWeek: last7Days
        });

        // Keep only last 30 entries
        if (this.analyticsData.learningVelocity.length > 30) {
            this.analyticsData.learningVelocity = this.analyticsData.learningVelocity.slice(-30);
        }
    }

    checkAchievements() {
        const totalSolved = Object.values(this.analyticsData.problemsSolvedByDate)
            .reduce((total, day) => total + day.length, 0);

        // First solve
        if (totalSolved >= 1 && !this.analyticsData.achievements.firstSolve) {
            this.analyticsData.achievements.firstSolve = true;
            this.showAchievement('🎉 First Problem Solved!', 'You solved your first problem!');
        }

        // Ten solved
        if (totalSolved >= 10 && !this.analyticsData.achievements.tenSolved) {
            this.analyticsData.achievements.tenSolved = true;
            this.showAchievement('🔥 Problem Solver!', 'You solved 10 problems!');
        }

        // Week streak
        if (this.analyticsData.studyStreak >= 7 && !this.analyticsData.achievements.streakWeek) {
            this.analyticsData.achievements.streakWeek = true;
            this.showAchievement('⚡ Week Warrior!', '7-day study streak!');
        }

        // All easy problems
        if (this.analyticsData.difficultyProgress.easy >= 10 && !this.analyticsData.achievements.allEasy) {
            this.analyticsData.achievements.allEasy = true;
            this.showAchievement('🌱 Foundation Master!', 'Solved 10 easy problems!');
        }

        // Video watcher
        if (this.analyticsData.videosWatched >= 20 && !this.analyticsData.achievements.theorist) {
            this.analyticsData.achievements.theorist = true;
            this.showAchievement('📚 Knowledge Seeker!', 'Watched 20 tutorial videos!');
        }
    }

    showAchievement(title, description) {
        // Create achievement notification
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-content">
                <div class="achievement-title">${title}</div>
                <div class="achievement-description">${description}</div>
            </div>
            <button class="achievement-close" onclick="this.parentElement.remove()">×</button>
        `;

        document.body.appendChild(notification);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);

        // Add to achievements section if visible
        this.updateAchievementsDisplay();
    }

    createAnalyticsDashboard() {
        // Add analytics tab to navigation if not exists
        const navTabs = document.querySelector('.navigation-tabs');
        if (navTabs && !document.querySelector('[data-level="analytics"]')) {
            const analyticsTab = document.createElement('button');
            analyticsTab.className = 'nav-tab';
            analyticsTab.setAttribute('data-level', 'analytics');
            analyticsTab.innerHTML = '📊 Analytics';
            analyticsTab.addEventListener('click', () => {
                this.game.switchTab('analytics');
            });
            navTabs.appendChild(analyticsTab);
        }
    }

    updateAnalyticsDashboard() {
        const analyticsContent = document.getElementById('analytics-content');
        if (analyticsContent) {
            analyticsContent.innerHTML = this.generateAnalyticsDashboard();
        }
    }

    generateAnalyticsDashboard() {
        console.log('Generating analytics dashboard...');
        
        const totalSolved = Object.values(this.analyticsData.problemsSolvedByDate)
            .reduce((total, day) => total + day.length, 0);
        
        console.log('Total solved problems:', totalSolved);
        
        const averageSessionTime = this.analyticsData.sessionTimes.length > 0 
            ? this.analyticsData.sessionTimes.reduce((sum, session) => sum + session.duration, 0) / this.analyticsData.sessionTimes.length / 1000 / 60
            : 0;

        const last7DaysActivity = this.getLast7DaysActivity();
        const topicBreakdown = this.getTopicBreakdown();
        const weeklyProgress = this.getWeeklyProgress();

        console.log('Analytics data prepared, generating HTML...');

        return `
            <div class="analytics-dashboard">
                <!-- Overview Cards -->
                <div class="analytics-overview">
                    <div class="analytics-card">
                        <div class="card-icon">🎯</div>
                        <div class="card-content">
                            <div class="card-value">${totalSolved}</div>
                            <div class="card-label">Problems Solved</div>
                        </div>
                    </div>
                    
                    <div class="analytics-card">
                        <div class="card-icon">⚡</div>
                        <div class="card-content">
                            <div class="card-value">${this.analyticsData.studyStreak}</div>
                            <div class="card-label">Day Streak</div>
                        </div>
                    </div>
                    
                    <div class="analytics-card">
                        <div class="card-icon">⏱️</div>
                        <div class="card-content">
                            <div class="card-value">${Math.round(averageSessionTime)}m</div>
                            <div class="card-label">Avg Session</div>
                        </div>
                    </div>
                    
                    <div class="analytics-card">
                        <div class="card-icon">🎬</div>
                        <div class="card-content">
                            <div class="card-value">${this.analyticsData.videosWatched}</div>
                            <div class="card-label">Videos Watched</div>
                        </div>
                    </div>
                </div>

                <!-- Charts and Detailed Analytics -->
                <div class="analytics-details">
                    <!-- Activity Chart -->
                    <div class="analytics-section">
                        <h3>📈 7-Day Activity</h3>
                        <div class="activity-chart">
                            ${this.generateActivityChart(last7DaysActivity)}
                        </div>
                    </div>

                    <!-- Difficulty Progress -->
                    <div class="analytics-section">
                        <h3>🎚️ Difficulty Breakdown</h3>
                        <div class="difficulty-chart">
                            ${this.generateDifficultyChart()}
                        </div>
                    </div>

                    <!-- Weekly Goals -->
                    <div class="analytics-section">
                        <h3>🎯 Weekly Goals</h3>
                        <div class="goals-progress">
                            ${this.generateGoalsProgress(weeklyProgress)}
                        </div>
                    </div>

                    <!-- Recent Achievements -->
                    <div class="analytics-section">
                        <h3>🏆 Achievements</h3>
                        <div class="achievements-grid">
                            ${this.generateAchievementsGrid()}
                        </div>
                    </div>

                    <!-- Learning Insights -->
                    <div class="analytics-section">
                        <h3>💡 Learning Insights</h3>
                        <div class="insights-list">
                            ${this.generateInsights()}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getLast7DaysActivity() {
        const activity = [];
        for (let i = 6; i >= 0; i--) {
            const date = new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
            const dayActivity = this.analyticsData.problemsSolvedByDate[date] || [];
            activity.push({
                date,
                count: dayActivity.length,
                dayName: new Date(date).toLocaleDateString('en', { weekday: 'short' })
            });
        }
        return activity;
    }

    getTopicBreakdown() {
        // This would analyze which topics/levels are being worked on most
        return this.game.gameState.solvedProblems;
    }

    getWeeklyProgress() {
        const thisWeek = this.getLast7DaysActivity();
        const problemsSolvedThisWeek = thisWeek.reduce((sum, day) => sum + day.count, 0);
        const videosWatchedThisWeek = Math.min(this.analyticsData.videosWatched, this.analyticsData.weeklyGoals.videosToWatch);
        
        return {
            problems: {
                current: problemsSolvedThisWeek,
                goal: this.analyticsData.weeklyGoals.problemsToSolve
            },
            videos: {
                current: videosWatchedThisWeek,
                goal: this.analyticsData.weeklyGoals.videosToWatch
            },
            studyTime: {
                current: Math.round(this.analyticsData.sessionTimes.reduce((sum, s) => sum + s.duration, 0) / 1000 / 60),
                goal: this.analyticsData.weeklyGoals.studyTimeMinutes
            }
        };
    }

    generateActivityChart(activity) {
        const maxCount = Math.max(...activity.map(day => day.count), 1);
        
        return activity.map(day => `
            <div class="activity-day">
                <div class="activity-bar" style="height: ${(day.count / maxCount) * 100}%"></div>
                <div class="activity-label">${day.dayName}</div>
                <div class="activity-count">${day.count}</div>
            </div>
        `).join('');
    }

    generateDifficultyChart() {
        const { easy, medium, hard } = this.analyticsData.difficultyProgress;
        const total = easy + medium + hard || 1;

        return `
            <div class="difficulty-item">
                <div class="difficulty-label">
                    <span class="difficulty-badge easy">Easy</span>
                    <span class="difficulty-count">${easy}</span>
                </div>
                <div class="difficulty-bar">
                    <div class="difficulty-fill easy" style="width: ${(easy / total) * 100}%"></div>
                </div>
            </div>
            <div class="difficulty-item">
                <div class="difficulty-label">
                    <span class="difficulty-badge medium">Medium</span>
                    <span class="difficulty-count">${medium}</span>
                </div>
                <div class="difficulty-bar">
                    <div class="difficulty-fill medium" style="width: ${(medium / total) * 100}%"></div>
                </div>
            </div>
            <div class="difficulty-item">
                <div class="difficulty-label">
                    <span class="difficulty-badge hard">Hard</span>
                    <span class="difficulty-count">${hard}</span>
                </div>
                <div class="difficulty-bar">
                    <div class="difficulty-fill hard" style="width: ${(hard / total) * 100}%"></div>
                </div>
            </div>
        `;
    }

    generateGoalsProgress(progress) {
        return `
            <div class="goal-item">
                <div class="goal-header">
                    <span class="goal-label">🎯 Problems</span>
                    <span class="goal-progress">${progress.problems.current}/${progress.problems.goal}</span>
                </div>
                <div class="goal-bar">
                    <div class="goal-fill" style="width: ${Math.min((progress.problems.current / progress.problems.goal) * 100, 100)}%"></div>
                </div>
            </div>
            <div class="goal-item">
                <div class="goal-header">
                    <span class="goal-label">🎬 Videos</span>
                    <span class="goal-progress">${progress.videos.current}/${progress.videos.goal}</span>
                </div>
                <div class="goal-bar">
                    <div class="goal-fill" style="width: ${Math.min((progress.videos.current / progress.videos.goal) * 100, 100)}%"></div>
                </div>
            </div>
            <div class="goal-item">
                <div class="goal-header">
                    <span class="goal-label">⏱️ Study Time</span>
                    <span class="goal-progress">${progress.studyTime.current}m/${progress.studyTime.goal}m</span>
                </div>
                <div class="goal-bar">
                    <div class="goal-fill" style="width: ${Math.min((progress.studyTime.current / progress.studyTime.goal) * 100, 100)}%"></div>
                </div>
            </div>
        `;
    }

    generateAchievementsGrid() {
        const achievements = [
            { key: 'firstSolve', icon: '🎉', title: 'First Solve', desc: 'Solved first problem' },
            { key: 'tenSolved', icon: '🔥', title: 'Problem Solver', desc: 'Solved 10 problems' },
            { key: 'streakWeek', icon: '⚡', title: 'Week Warrior', desc: '7-day streak' },
            { key: 'allEasy', icon: '🌱', title: 'Foundation Master', desc: '10 easy problems' },
            { key: 'theorist', icon: '📚', title: 'Knowledge Seeker', desc: '20 videos watched' },
            { key: 'speedSolver', icon: '💨', title: 'Speed Demon', desc: 'Fast solver' }
        ];

        return achievements.map(achievement => `
            <div class="achievement-item ${this.analyticsData.achievements[achievement.key] ? 'unlocked' : 'locked'}">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-info">
                    <div class="achievement-title">${achievement.title}</div>
                    <div class="achievement-desc">${achievement.desc}</div>
                </div>
                ${this.analyticsData.achievements[achievement.key] ? '<div class="achievement-status">✅</div>' : '<div class="achievement-status">🔒</div>'}
            </div>
        `).join('');
    }

    generateInsights() {
        const insights = [];
        
        const totalSolved = Object.values(this.analyticsData.problemsSolvedByDate)
            .reduce((total, day) => total + day.length, 0);

        if (totalSolved === 0) {
            insights.push('🌟 Welcome to your analytics dashboard! Start solving problems to see your progress here.');
            insights.push('📚 Try watching some tutorial videos to understand concepts better.');
            insights.push('🎯 Set a goal to solve 1-2 problems daily for consistent progress.');
        } else if (totalSolved < 5) {
            insights.push('🎯 Great start! Try to solve 5 problems to build momentum.');
            insights.push('📈 Focus on easy problems first to build your foundation.');
        } else if (this.analyticsData.studyStreak === 0) {
            insights.push('📅 Build consistency by studying daily for better retention.');
        } else if (this.analyticsData.studyStreak >= 3) {
            insights.push('🔥 Amazing streak! Consistency is key to mastering DSA.');
        }

        if (this.analyticsData.difficultyProgress.easy > 0 && this.analyticsData.difficultyProgress.medium === 0) {
            insights.push('📈 Ready to level up? Try some medium difficulty problems!');
        }

        if (this.analyticsData.videosWatched === 0 && totalSolved > 0) {
            insights.push('🎬 Watch tutorial videos to understand concepts better.');
        }

        if (totalSolved > 0 && this.analyticsData.hintsUsed === 0) {
            insights.push('💡 Don\'t hesitate to use hints when you\'re stuck - learning is the goal!');
        }

        // Always show at least a few insights
        if (insights.length === 0) {
            insights.push('🌟 You\'re doing great! Keep up the consistent practice.');
            insights.push('📊 Your analytics will get more detailed as you solve more problems.');
            insights.push('🎯 Try setting weekly goals to stay motivated.');
        }

        // Ensure we have at least 3 insights
        while (insights.length < 3) {
            const additionalInsights = [
                '💪 Regular practice is more effective than cramming sessions.',
                '🧠 Take breaks between study sessions to improve retention.',
                '📝 Consider implementing solutions in multiple languages.',
                '🤝 Discuss problems with peers to gain different perspectives.',
                '🔄 Review previously solved problems to reinforce learning.'
            ];
            const randomInsight = additionalInsights[Math.floor(Math.random() * additionalInsights.length)];
            if (!insights.includes(randomInsight)) {
                insights.push(randomInsight);
            }
        }

        return insights.slice(0, 5).map(insight => `
            <div class="insight-item">
                <div class="insight-text">${insight}</div>
            </div>
        `).join('');
    }

    resetAnalytics() {
        this.analyticsData = this.getDefaultAnalytics();
        this.saveAnalytics();
        this.updateAnalyticsDashboard();
        
        // Show notification
        this.showAchievement('🔄 Analytics Reset!', 'All analytics data has been cleared');
    }
}

// Initialize analytics when the page loads
let progressAnalytics;
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing analytics...');
    
    // Initialize immediately if game is available
    if (window.game) {
        initializeAnalytics();
    } else {
        // Wait for game to load
        setTimeout(() => {
            initializeAnalytics();
        }, 1000);
        
        // Also try after a longer delay as backup
        setTimeout(() => {
            if (!window.progressAnalytics) {
                initializeAnalytics();
            }
        }, 3000);
    }
});

function initializeAnalytics() {
    console.log('Attempting to initialize analytics...');
    
    if (window.game && !window.progressAnalytics) {
        progressAnalytics = new ProgressAnalytics(window.game);
        window.progressAnalytics = progressAnalytics;
        
        console.log('Analytics initialized successfully');
        
        // Initialize analytics dashboard immediately
        progressAnalytics.updateAnalyticsDashboard();
        
        // Hook into game events
        const originalToggleProblem = window.game.toggleProblem;
        window.game.toggleProblem = function(level, index) {
            const result = originalToggleProblem.call(this, level, index);
            const problemId = `${level}-${index}`;
            if (this.gameState.solvedProblems.has(problemId)) {
                const problem = window.dsaData[level]?.problems[index];
                if (problem) {
                    progressAnalytics.trackProblemSolved(problemId, problem.difficulty);
                }
            }
            return result;
        };
        
        // Hook into video watching
        const originalShowVideoModal = window.game.showVideoModal;
        if (originalShowVideoModal) {
            window.game.showVideoModal = function(problemId) {
                const result = originalShowVideoModal.call(this, problemId);
                progressAnalytics.trackVideoWatched(problemId);
                return result;
            };
        }
        
        // Update analytics content if analytics tab is currently visible
        const analyticsContent = document.getElementById('analytics-content');
        const analyticsContentParent = document.getElementById('content-analytics');
        if (analyticsContent && analyticsContentParent && analyticsContentParent.classList.contains('active')) {
            analyticsContent.innerHTML = progressAnalytics.generateAnalyticsDashboard();
        }
    } else {
        console.log('Analytics initialization skipped - game not ready or already initialized');
    }
}
