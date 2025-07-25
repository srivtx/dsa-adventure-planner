class DSAGame {
    constructor() {
        this.gameState = {
            solvedProblems: new Set(),
            unlockedLevels: new Set([1]),
            currentLevel: 1,
            streak: 0,
            lastSolvedDate: null,
            totalSolved: 0,
            achievements: new Set(),
            theme: 'light',
            watchedVideos: new Set(),
            favoriteProblems: new Set(),
            problemNotes: {}
        };
        
        this.currentTab = 'all';
        this.searchTerm = '';
        this.filters = {
            difficulty: 'all',
            solved: 'all'
        };
        
        this.loadGameState();
        this.initializeEventListeners();
        this.render();
        this.checkDailyChallenge();
    }

    initializeEventListeners() {
        // Tab navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                this.switchTab(tab.dataset.level);
            });
        });

        // Search functionality
        document.getElementById('search-input').addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.render();
        });

        // Filters
        document.getElementById('difficulty-filter').addEventListener('change', (e) => {
            this.filters.difficulty = e.target.value;
            this.render();
        });

        document.getElementById('solved-filter').addEventListener('click', () => {
            this.filters.solved = 'solved';
            this.render();
        });

        document.getElementById('unsolved-filter').addEventListener('click', () => {
            this.filters.solved = 'unsolved';
            this.render();
        });

        // Theme toggle
        document.getElementById('theme-btn').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Export/Import
        document.getElementById('export-progress').addEventListener('click', () => {
            this.exportProgress();
        });

        document.getElementById('import-btn').addEventListener('click', () => {
            document.getElementById('import-progress').click();
        });

        document.getElementById('import-progress').addEventListener('change', (e) => {
            this.importProgress(e.target.files[0]);
        });

        // Modal controls
        document.getElementById('close-modal').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('run-code').addEventListener('click', () => {
            this.runCode();
        });

        document.getElementById('show-hint').addEventListener('click', () => {
            this.showHint();
        });

        document.getElementById('show-solution').addEventListener('click', () => {
            this.showSolution();
        });
    }

    loadGameState() {
        try {
            const saved = localStorage.getItem('dsaGameState');
            if (saved) {
                const parsed = JSON.parse(saved);
                this.gameState.solvedProblems = new Set(parsed.solvedProblems || []);
                this.gameState.unlockedLevels = new Set(parsed.unlockedLevels || [1]);
                this.gameState.currentLevel = parsed.currentLevel || 1;
                this.gameState.streak = parsed.streak || 0;
                this.gameState.lastSolvedDate = parsed.lastSolvedDate;
                this.gameState.totalSolved = parsed.totalSolved || 0;
                this.gameState.achievements = new Set(parsed.achievements || []);
                this.gameState.theme = parsed.theme || 'light';
                this.gameState.watchedVideos = new Set(parsed.watchedVideos || []);
                this.gameState.favoriteProblems = new Set(parsed.favoriteProblems || []);
                this.gameState.problemNotes = parsed.problemNotes || {};
                
                // Apply theme
                if (this.gameState.theme === 'dark') {
                    document.body.classList.add('dark-theme');
                    document.getElementById('theme-btn').textContent = '☀️';
                }
            }
        } catch (error) {
            console.error('Error loading game state:', error);
        }
    }

    saveGameState() {
        try {
            const stateToSave = {
                solvedProblems: Array.from(this.gameState.solvedProblems),
                unlockedLevels: Array.from(this.gameState.unlockedLevels),
                currentLevel: this.gameState.currentLevel,
                streak: this.gameState.streak,
                lastSolvedDate: this.gameState.lastSolvedDate,
                totalSolved: this.gameState.totalSolved,
                achievements: Array.from(this.gameState.achievements),
                theme: this.gameState.theme,
                watchedVideos: Array.from(this.gameState.watchedVideos),
                favoriteProblems: Array.from(this.gameState.favoriteProblems),
                problemNotes: this.gameState.problemNotes
            };
            localStorage.setItem('dsaGameState', JSON.stringify(stateToSave));
        } catch (error) {
            console.error('Error saving game state:', error);
        }
    }

    toggleTheme() {
        const body = document.body;
        const themeBtn = document.getElementById('theme-btn');
        
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            themeBtn.textContent = '🌙';
            this.gameState.theme = 'light';
        } else {
            body.classList.add('dark-theme');
            themeBtn.textContent = '☀️';
            this.gameState.theme = 'dark';
        }
        
        this.saveGameState();
    }

    switchTab(level) {
        console.log('Switching to tab:', level);
        this.currentTab = level;
        
        // Update tab appearance
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        const activeTab = document.querySelector(`[data-level="${level}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        } else {
            console.error('Tab not found for level:', level);
        }

        // Show/hide content
        document.querySelectorAll('.level-content').forEach(content => {
            content.classList.remove('active');
        });
        const contentElement = document.getElementById(`content-${level}`);
        if (contentElement) {
            contentElement.classList.add('active');
            console.log('Showing content for level:', level);
        } else {
            console.error('Content element not found for level:', level);
        }

        this.render();
    }

    toggleProblem(level, problemIndex) {
        const problemId = `${level}-${problemIndex}`;
        
        if (this.gameState.solvedProblems.has(problemId)) {
            this.gameState.solvedProblems.delete(problemId);
            this.gameState.totalSolved--;
            this.updateStreak(false);
        } else {
            this.gameState.solvedProblems.add(problemId);
            this.gameState.totalSolved++;
            this.updateStreak(true);
            this.checkLevelCompletion(level);
            this.checkAchievements();
            this.showCelebration();
        }
        
        this.saveGameState();
        this.updateStats();
        this.render();
    }

    updateStreak(solved) {
        const today = new Date().toDateString();
        
        if (solved) {
            if (this.gameState.lastSolvedDate === today) {
                // Already solved something today, maintain streak
                return;
            } else {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                
                if (this.gameState.lastSolvedDate === yesterday.toDateString()) {
                    this.gameState.streak++;
                } else {
                    this.gameState.streak = 1;
                }
                
                this.gameState.lastSolvedDate = today;
            }
        }
    }

    checkLevelCompletion(level) {
        const levelData = window.dsaData ? window.dsaData[level] : undefined;
        if (!levelData) return;
        
        const levelProblems = levelData.problems.length;
        const solvedInLevel = Array.from(this.gameState.solvedProblems)
            .filter(id => id.startsWith(`${level}-`)).length;
        
        if (solvedInLevel === levelProblems) {
            // Level completed! Unlock next level
            const nextLevel = parseInt(level) + 1;
            if (nextLevel <= 8 && !this.gameState.unlockedLevels.has(nextLevel)) {
                this.gameState.unlockedLevels.add(nextLevel);
                this.gameState.currentLevel = nextLevel;
                this.showLevelUnlockNotification(nextLevel);
            }
        }
    }

    checkAchievements() {
        const newAchievements = [];
        
        // First problem
        if (this.gameState.totalSolved === 1 && !this.gameState.achievements.has('first_problem')) {
            newAchievements.push('first_problem');
        }
        
        // Problem count milestones
        [10, 25, 50, 100, 200, 300, 400].forEach(count => {
            const key = `problem_${count}`;
            if (this.gameState.totalSolved >= count && !this.gameState.achievements.has(key)) {
                newAchievements.push(key);
            }
        });
        
        // Streak achievements
        [3, 7, 14, 30, 100].forEach(days => {
            const key = `streak_${days}`;
            if (this.gameState.streak >= days && !this.gameState.achievements.has(key)) {
                newAchievements.push(key);
            }
        });
        
        // Video learning achievements
        const videoCount = this.gameState.watchedVideos.size;
        [5, 10, 25, 50].forEach(count => {
            const key = `video_${count}`;
            if (videoCount >= count && !this.gameState.achievements.has(key)) {
                newAchievements.push(key);
            }
        });
        
        // Learning achievements
        const notesCount = Object.keys(this.gameState.problemNotes).filter(key => 
            this.gameState.problemNotes[key] && this.gameState.problemNotes[key].length > 0
        ).length;
        
        if (notesCount >= 10 && !this.gameState.achievements.has('knowledge_seeker')) {
            newAchievements.push('knowledge_seeker');
        }
        
        const favoriteCount = this.gameState.favoriteProblems.size;
        if (favoriteCount >= 15 && !this.gameState.achievements.has('favorite_collector')) {
            newAchievements.push('favorite_collector');
        }
        
        // Level completion
        for (let level = 1; level <= 8; level++) {
            const levelData = window.dsaData ? window.dsaData[level] : undefined;
            if (levelData) {
                const solvedInLevel = Array.from(this.gameState.solvedProblems)
                    .filter(id => id.startsWith(`${level}-`)).length;
                if (solvedInLevel === levelData.problems.length) {
                    const key = `level_${level}_complete`;
                    if (!this.gameState.achievements.has(key)) {
                        newAchievements.push(key);
                    }
                }
            }
        }
        
        // Show new achievements
        newAchievements.forEach(achievement => {
            if (!this.gameState.achievements.has(achievement)) {
                this.gameState.achievements.add(achievement);
                this.showAchievementNotification(achievement);
            }
        });
    }

    render() {
        if (this.currentTab === 'all') {
            this.renderOverview();
        } else {
            this.renderLevelDetail(parseInt(this.currentTab));
        }
        this.updateStats();
        this.renderAchievements();
    }

    renderOverview() {
        const content = document.getElementById('content-all');
        let html = '';

        for (let level = 1; level <= 8; level++) {
            const levelData = window.dsaData ? window.dsaData[level] : undefined;
            if (!levelData) continue;

            const isUnlocked = this.gameState.unlockedLevels.has(level);
            const solvedCount = Array.from(this.gameState.solvedProblems)
                .filter(id => id.startsWith(`${level}-`)).length;
            const totalCount = levelData.problems.length;
            const progressPercent = (solvedCount / totalCount) * 100;

            const levelNames = {
                1: '🔢 Arrays & Loops',
                2: '👆 Two Pointers & Hashing',
                3: '🔗 Linked Lists & Stacks',
                4: '🌳 Strings & Recursion',
                5: '�️ Trees & Graphs',
                6: '💎 Dynamic Programming',
                7: '📊 Heaps & Sorting',
                8: '🎯 Advanced Topics'
            };

            html += `
                <div class="level-overview ${!isUnlocked ? 'locked' : ''}">
                    <div class="level-header">
                        <h3>${levelNames[level]} ${!isUnlocked ? '🔒' : ''}</h3>
                        <div class="level-stats">
                            <span class="solved-count">${solvedCount}/${totalCount}</span>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${progressPercent}%"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="level-description">
                        <p>${levelData.description || 'Master the fundamentals of this topic.'}</p>
                    </div>

                    ${isUnlocked ? `
                        <div class="preview-problems">
                            ${levelData.problems.slice(0, 3).map((problem, index) => {
                                const problemId = `${level}-${index}`;
                                const isSolved = this.gameState.solvedProblems.has(problemId);
                                return `
                                    <div class="problem-preview ${isSolved ? 'solved' : ''}">
                                        <div class="problem-title">
                                            ${isSolved ? '✅' : '⭕'} ${problem.title}
                                        </div>
                                        <div class="problem-difficulty ${problem.difficulty}">${problem.difficulty}</div>
                                    </div>
                                `;
                            }).join('')}
                            
                            ${totalCount > 3 ? `
                                <div class="view-all-btn">
                                    <button onclick="game.switchTab('${level}')" class="btn-primary">
                                        📚 View All ${totalCount} Problems
                                    </button>
                                </div>
                            ` : ''}
                        </div>
                    ` : `
                        <div class="locked-message">
                            <p>🔒 Complete Level ${level - 1} to unlock this level!</p>
                        </div>
                    `}
                </div>
            `;
        }

        content.innerHTML = html;
    }

    renderLevelDetail(level) {
        console.log('Rendering level detail for level:', level);
        const content = document.getElementById(`content-${level}`);
        console.log('Content element found:', !!content);
        const levelData = window.dsaData ? window.dsaData[level] : undefined;
        console.log('Level data found:', !!levelData);
        
        if (!levelData) {
            content.innerHTML = '<p>Level data not found! Make sure data.js is loaded properly.</p>';
            return;
        }

        const isUnlocked = this.gameState.unlockedLevels.has(level);
        console.log('Level unlocked:', isUnlocked);
        if (!isUnlocked) {
            content.innerHTML = `
                <div class="locked-level">
                    <h2>🔒 Level ${level} is Locked</h2>
                    <p>Complete Level ${level - 1} to unlock this level!</p>
                </div>
            `;
            return;
        }

        // Filter problems based on search and filters
        let filteredProblems = levelData.problems.filter((problem, index) => {
            const problemId = `${level}-${index}`;
            const isSolved = this.gameState.solvedProblems.has(problemId);
            
            // Search filter
            if (this.searchTerm && !problem.title.toLowerCase().includes(this.searchTerm)) {
                return false;
            }
            
            // Difficulty filter
            if (this.filters.difficulty !== 'all' && problem.difficulty !== this.filters.difficulty) {
                return false;
            }
            
            // Solved filter
            if (this.filters.solved === 'solved' && !isSolved) {
                return false;
            }
            if (this.filters.solved === 'unsolved' && isSolved) {
                return false;
            }
            
            return true;
        });

        const solvedCount = Array.from(this.gameState.solvedProblems)
            .filter(id => id.startsWith(`${level}-`)).length;
        const totalCount = levelData.problems.length;
        const progressPercent = (solvedCount / totalCount) * 100;

        let html = `
            <div class="level-detail-header">
                <h2>Level ${level}: ${this.getLevelName(level)}</h2>
                <div class="level-progress">
                    <div class="progress-info">
                        <span>${solvedCount}/${totalCount} Problems Solved</span>
                        <span>${progressPercent.toFixed(1)}% Complete</span>
                    </div>
                    <div class="progress-bar large">
                        <div class="progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                </div>
            </div>

            <div class="problems-container">
                ${filteredProblems.map((problem, index) => {
                    const originalIndex = levelData.problems.indexOf(problem);
                    const problemId = `${level}-${originalIndex}`;
                    const isSolved = this.gameState.solvedProblems.has(problemId);
                    
                    return `
                        <div class="problem ${isSolved ? 'solved' : ''}" data-problem-id="${problemId}">
                            <div class="problem-header">
                                <div class="problem-title-row">
                                    <h3 class="problem-title">${problem.title}</h3>
                                    <div class="problem-actions">
                                        <span class="difficulty-badge ${problem.difficulty}">${problem.difficulty}</span>
                                        <button class="solve-btn ${isSolved ? 'solved' : ''}" 
                                                onclick="game.toggleProblem(${level}, ${originalIndex})">
                                            ${isSolved ? '✅ Solved' : '⭕ Mark Solved'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="problem-content">
                                <div class="problem-section">
                                    <h4>💡 Why this matters:</h4>
                                    <p>${problem.why}</p>
                                </div>
                                
                                <div class="problem-section">
                                    <h4>🚀 Future connections:</h4>
                                    <p>${problem.future}</p>
                                </div>
                                
                                <div class="problem-section">
                                    <h4>💭 Hint:</h4>
                                    <p class="hint">${problem.hint}</p>
                                </div>

                                <div class="problem-actions-expanded">
                                    <button class="btn-secondary" onclick="game.openProblemModal('${problemId}')">
                                        🔍 Practice
                                    </button>
                                    <button class="btn-secondary" onclick="game.showHintModal('${problemId}')">
                                        💡 More Hints
                                    </button>
                                    <button class="btn-secondary" onclick="game.showVideoModal('${problemId}')">
                                        🎬 Watch Video
                                    </button>
                                    <button class="btn-secondary" onclick="game.showTheoryModal('${problemId}')">
                                        📚 Learn Theory
                                    </button>
                                    <button class="favorite-btn ${this.gameState.favoriteProblems.has(problemId) ? 'favorited' : ''}" 
                                            onclick="game.toggleFavorite('${problemId}')">
                                        ${this.gameState.favoriteProblems.has(problemId) ? '⭐ Favorited' : '☆ Favorite'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>

            ${filteredProblems.length === 0 ? `
                <div class="no-results">
                    <p>No problems match your current filters.</p>
                    <button onclick="game.clearFilters()" class="btn-primary">Clear Filters</button>
                </div>
            ` : ''}
        `;

        content.innerHTML = html;
    }

    updateStats() {
        document.getElementById('current-level').textContent = this.gameState.currentLevel;
        document.getElementById('total-solved').textContent = this.gameState.totalSolved;
        
        // Calculate total problems
        let totalProblems = 0;
        for (let level = 1; level <= 8; level++) {
            if (window.dsaData && window.dsaData[level]) {
                totalProblems += window.dsaData[level].problems.length;
            }
        }
        document.getElementById('total-problems').textContent = totalProblems;
        
        const completionRate = totalProblems > 0 ? (this.gameState.totalSolved / totalProblems * 100).toFixed(1) : 0;
        document.getElementById('completion-rate').textContent = `${completionRate}%`;

        // Update additional stats if they exist
        const streakElement = document.getElementById('current-streak');
        if (streakElement) {
            streakElement.textContent = this.gameState.streak;
        }

        const unlockedElement = document.getElementById('unlocked-levels');
        if (unlockedElement) {
            unlockedElement.textContent = this.gameState.unlockedLevels.size;
        }
    }

    getLevelName(level) {
        const names = {
            1: 'Arrays & Loops',
            2: 'Two Pointers & Hashing',
            3: 'Linked Lists & Stacks',
            4: 'Strings & Recursion',
            5: 'Trees & Graphs',
            6: 'Dynamic Programming',
            7: 'Heaps & Sorting',
            8: 'Advanced Topics'
        };
        return names[level] || `Level ${level}`;
    }

    clearFilters() {
        this.searchTerm = '';
        this.filters = { difficulty: 'all', solved: 'all' };
        
        // Reset UI elements
        document.getElementById('search-input').value = '';
        document.getElementById('difficulty-filter').value = 'all';
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        
        this.render();
    }

    // Modal and notification methods
    openProblemModal(problemId) {
        const [level, index] = problemId.split('-').map(Number);
        const problem = window.dsaData && window.dsaData[level] ? window.dsaData[level].problems[index] : null;
        
        if (!problem) {
            console.error('Problem not found:', problemId);
            return;
        }
        
        const modal = document.getElementById('problem-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalContent = document.getElementById('modal-content');
        
        modalTitle.textContent = problem.title;
        modalContent.innerHTML = `
            <div class="modal-section">
                <h4>Problem Description:</h4>
                <p>${problem.why}</p>
                <p><strong>Hint:</strong> ${problem.hint}</p>
            </div>
            
            <div class="code-section">
                <h4>Practice Area:</h4>
                <textarea id="code-editor" placeholder="Write your solution here...
// Example for arrays:
function solveProblem(arr) {
    // Your code here
    return result;
}"></textarea>
                <div class="code-actions">
                    <button id="run-code" class="btn-primary">▶️ Test Code</button>
                    <button id="show-hint" class="btn-secondary">💡 Show Hint</button>
                    <button id="show-solution" class="btn-secondary">📖 Show Approach</button>
                </div>
                <div id="code-output"></div>
            </div>
        `;
        
        modal.style.display = 'block';
    }

    showHintModal(problemId) {
        const [level, index] = problemId.split('-').map(Number);
        const problem = window.dsaData && window.dsaData[level] ? window.dsaData[level].problems[index] : null;
        
        if (!problem) {
            console.error('Problem not found:', problemId);
            return;
        }
        
        const hints = this.getAdditionalHints(level, problem);
        
        const modal = document.getElementById('problem-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalContent = document.getElementById('modal-content');
        
        modalTitle.textContent = `💡 Hints: ${problem.title}`;
        modalContent.innerHTML = `
            <div class="hints-container">
                ${hints.map((hint, i) => `
                    <div class="hint-item">
                        <h4>Hint ${i + 1}:</h4>
                        <p>${hint}</p>
                    </div>
                `).join('')}
            </div>
        `;
        
        modal.style.display = 'block';
    }

    closeModal() {
        document.getElementById('problem-modal').style.display = 'none';
    }

    // Video Learning System with Dynamic Search
    showVideoModal(problemId) {
        // Use an IIFE to handle async/await in event handler
        (async () => {
            const [level, index] = problemId.split('-').map(Number);
            const problem = window.dsaData && window.dsaData[level] ? window.dsaData[level].problems[index] : null;
            if (!problem) {
                console.error('Problem not found:', problemId);
                return;
            }
            const modal = document.getElementById('problem-modal');
            const modalTitle = document.getElementById('modal-title');
            const modalContent = document.getElementById('modal-content');
            modalTitle.textContent = 'Video Learning: ' + problem.title;
            modalContent.innerHTML = "<div class='video-loading'>🔍 Searching for top videos...</div>";
            modal.style.display = 'block';

            // Fetch top 3 videos
            const videos = await this.getVideoResources(problem);
            if (!videos || videos.length === 0) {
                modalContent.innerHTML = "<div class='video-error'>❌ No videos found for this problem. Try a different search term.</div>";
                return;
            }
            // Render top 3 videos and let user choose
            let videoHtml = '<div class="video-choice-container">';
            videoHtml += '<h4>🎬 Choose a video to watch (Top ' + videos.length + ' results):</h4>';
            videos.forEach((video, i) => {
                const publishedDate = video.publishedAt ? new Date(video.publishedAt).toLocaleDateString() : '';
                const channelName = video.channelTitle || 'Unknown Channel';
                
                videoHtml += '<div class="video-section">' +
                    '<div class="video-header">' +
                        '<h5>' + (i+1) + '. ' + video.title + '</h5>' +
                        '<div class="video-meta">' +
                            '<span class="channel-name">📺 ' + channelName + '</span>' +
                            (publishedDate ? '<span class="publish-date">📅 ' + publishedDate + '</span>' : '') +
                        '</div>' +
                    '</div>' +
                    '<iframe width="100%" height="315" src="' + video.url + '" frameborder="0" allowfullscreen></iframe>' +
                    '<p class="video-description">' + (video.description ? video.description.substring(0, 200) + '...' : 'No description available') + '</p>' +
                    '<div class="video-actions">' +
                        '<button class="video-watched-btn" onclick="game.markVideoWatched(\'' + problemId + '-video' + i + '\')">✅ Mark as Watched</button>' +
                        '<a href="https://www.youtube.com/watch?v=' + video.id + '" target="_blank" class="watch-on-youtube">🔗 Watch on YouTube</a>' +
                    '</div>' +
                    '</div>';
            });
            videoHtml += '<div class="video-progress"><h4>🎯 Your Video Progress</h4><div class="progress-list">';
            videos.forEach((video, i) => {
                const watched = this.gameState.watchedVideos.has(problemId + '-video' + i);
                videoHtml += '<div class="progress-item ' + (watched ? 'completed' : '') + '">' + (watched ? '✅' : '⭕') + ' Video ' + (i+1) + '</div>';
            });
            videoHtml += '</div></div></div>';
            modalContent.innerHTML = videoHtml;
        })();
    }

    showTheoryModal(problemId) {
        const [level, index] = problemId.split('-').map(Number);
        const problem = window.dsaData && window.dsaData[level] ? window.dsaData[level].problems[index] : null;
        
        if (!problem) {
            console.error('Problem not found:', problemId);
            return;
        }
        
        const theory = this.getTheoryContent(level, problem);
        
        const modal = document.getElementById('problem-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalContent = document.getElementById('modal-content');
        
        modalTitle.textContent = `📚 Theory: ${problem.title}`;
        modalContent.innerHTML = `
            <div class="theory-container">
                <div class="theory-section">
                    <h4>📖 Core Concept</h4>
                    <div class="theory-content">
                        ${theory.concept}
                    </div>
                </div>
                
                <div class="theory-section">
                    <h4>⚙️ How It Works</h4>
                    <div class="theory-content">
                        ${theory.howItWorks}
                    </div>
                </div>
                
                <div class="theory-section">
                    <h4>📊 Time & Space Complexity</h4>
                    <div class="complexity-grid">
                        <div class="complexity-item">
                            <strong>Time Complexity:</strong> ${theory.timeComplexity}
                        </div>
                        <div class="complexity-item">
                            <strong>Space Complexity:</strong> ${theory.spaceComplexity}
                        </div>
                    </div>
                </div>
                
                <div class="theory-section">
                    <h4>💡 When to Use</h4>
                    <div class="theory-content">
                        ${theory.whenToUse}
                    </div>
                </div>
                
                <div class="theory-section">
                    <h4>🔗 Related Patterns</h4>
                    <div class="related-patterns">
                        ${theory.relatedPatterns.map(pattern => `
                            <div class="pattern-tag">${pattern}</div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="notes-section">
                    <h4>📝 My Notes</h4>
                    <textarea id="problem-notes" 
                              placeholder="Write your own notes about this problem..."
                              onchange="game.saveNotes('${problemId}', this.value)">${this.gameState.problemNotes[problemId] || ''}</textarea>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
    }

    markVideoWatched(videoId) {
        this.gameState.watchedVideos.add(videoId);
        this.saveGameState();
        
        // Show mini celebration
        const notification = document.createElement('div');
        notification.className = 'mini-notification';
        notification.innerHTML = '🎬 Video completed! Great learning! 📚';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
        
        // Check for video watching achievements
        this.checkVideoAchievements();
    }

    toggleFavorite(problemId) {
        if (this.gameState.favoriteProblems.has(problemId)) {
            this.gameState.favoriteProblems.delete(problemId);
        } else {
            this.gameState.favoriteProblems.add(problemId);
        }
        this.saveGameState();
        this.render();
    }

    saveNotes(problemId, notes) {
        this.gameState.problemNotes[problemId] = notes;
        this.saveGameState();
    }

    runCode() {
        const code = document.getElementById('code-editor').value;
        const output = document.getElementById('code-output');
        
        try {
            // Simple code validation (in a real app, you'd use a sandboxed environment)
            if (code.trim()) {
                output.innerHTML = `
                    <div class="success">
                        ✅ Code looks good! In a real implementation, this would run your code safely.
                        <br><br>
                        <strong>Next steps:</strong>
                        <ul>
                            <li>Test with edge cases</li>
                            <li>Consider time complexity</li>
                            <li>Think about space optimization</li>
                        </ul>
                    </div>
                `;
            } else {
                output.innerHTML = '<div class="error">❌ Please write some code first!</div>';
            }
        } catch (error) {
            output.innerHTML = `<div class="error">❌ Error: ${error.message}</div>`;
        }
    }

    showSolution() {
        const output = document.getElementById('code-output');
        output.innerHTML = `
            <div class="solution">
                <h4>💡 Approach:</h4>
                <p>Instead of showing the full solution, here are the key steps:</p>
                <ol>
                    <li>Understand the problem requirements</li>
                    <li>Think about the data structure needed</li>
                    <li>Consider the algorithm approach</li>
                    <li>Implement step by step</li>
                    <li>Test with examples</li>
                </ol>
                <p><strong>Remember:</strong> Learning comes from solving it yourself! 🧠</p>
            </div>
        `;
    }

    showHint() {
        const output = document.getElementById('code-output');
        output.innerHTML = `
            <div class="hint-box">
                <h4>💭 Think about:</h4>
                <ul>
                    <li>What data structure would be most efficient?</li>
                    <li>Can you break the problem into smaller steps?</li>
                    <li>Are there any patterns you can identify?</li>
                    <li>What would be the brute force approach first?</li>
                </ul>
            </div>
        `;
    }

    getAdditionalHints(level, problem) {
        // Generate contextual hints based on level and problem type
        const baseHints = [
            problem.hint,
            "Start with the simplest approach, then optimize",
            "Draw out an example on paper first",
            "Consider edge cases like empty inputs"
        ];

        if (level === 1) {
            baseHints.push("Think about how to iterate through the array efficiently");
        } else if (level === 2) {
            baseHints.push("Consider using two pointers or a hash map for O(1) lookups");
        } else if (level === 3) {
            baseHints.push("Think about LIFO (stack) or FIFO (queue) properties");
        } else if (level === 4) {
            baseHints.push("Consider the recursive structure and base cases");
        } else if (level === 5) {
            baseHints.push("Think about graph traversal and visited nodes");
        } else if (level === 6) {
            baseHints.push("Look for overlapping subproblems and optimal substructure");
        }

        return baseHints;
    }

    async getVideoResources(problem) {
        // For security, API key should be set via environment or config
        const API_KEY = window.YOUTUBE_API_KEY || 'YOUR_API_KEY_HERE';
        const query = encodeURIComponent(problem.title + ' algorithm tutorial explanation programming');
        
        // Debug logging
        console.log('🔑 API Key status:', API_KEY === 'YOUR_API_KEY_HERE' ? 'Using placeholder (mock mode)' : 'API key loaded');
        console.log('🔍 Search query:', query);
        
        try {
            // Use YouTube Data API v3 to search for videos
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${query}&type=video&key=${API_KEY}&videoDefinition=any&videoDuration=medium&order=relevance`
            );
            
            if (!response.ok) {
                throw new Error(`YouTube API error: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (!data.items || data.items.length === 0) {
                console.log('No videos found from YouTube API, using fallback');
                return this.getMockVideoResults(problem);
            }
            
            // Transform YouTube API response to our format
            const videos = data.items.map(item => ({
                id: item.id.videoId,
                title: item.snippet.title,
                url: `https://www.youtube.com/embed/${item.id.videoId}`,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.medium.url,
                channelTitle: item.snippet.channelTitle,
                publishedAt: item.snippet.publishedAt
            }));
            
            console.log(`Found ${videos.length} videos from YouTube API for: ${problem.title}`);
            return videos;
            
        } catch (error) {
            console.error('Error fetching YouTube videos:', error);
            console.log('Falling back to mock data');
            return this.getMockVideoResults(problem);
        }
    }

    getMockVideoResults(problem) {
        // Generate realistic mock video results based on problem type
        const baseVideos = [
            {
                id: 'video1',
                title: `${problem.title} - Complete Algorithm Explanation`,
                url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
                description: `Learn how to solve ${problem.title} step by step. This video covers the algorithm, complexity analysis, and common edge cases.`
            },
            {
                id: 'video2', 
                title: `${problem.title} - Visual Tutorial with Examples`,
                url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder  
                description: `Visual walkthrough of ${problem.title} with multiple examples and animations to help you understand the concept.`
            },
            {
                id: 'video3',
                title: `Data Structures & Algorithms: ${problem.title} Made Easy`,
                url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
                description: `Comprehensive guide to ${problem.title}. Perfect for beginners and interview preparation.`
            }
        ];

        return baseVideos;
    }

    getTheoryContent(level, problem) {
        const theoryMappings = {
            1: { // Arrays
                concept: `
                    <p><strong>Arrays</strong> are the most fundamental data structure in programming. They store elements in contiguous memory locations, allowing for efficient access via indices.</p>
                    <p><strong>Key Properties:</strong></p>
                    <ul>
                        <li>Fixed size (in most languages)</li>
                        <li>Elements of the same type</li>
                        <li>Zero-based indexing</li>
                        <li>Constant-time access O(1)</li>
                    </ul>
                `,
                howItWorks: `
                    <p>Arrays work by storing elements in consecutive memory addresses. When you access arr[i], the computer calculates the memory address as: base_address + (i × element_size).</p>
                    <p><strong>Common Operations:</strong></p>
                    <ul>
                        <li><strong>Access:</strong> arr[index] - O(1)</li>
                        <li><strong>Search:</strong> Linear scan - O(n)</li>
                        <li><strong>Insert:</strong> At end O(1), anywhere else O(n)</li>
                        <li><strong>Delete:</strong> O(n) due to shifting elements</li>
                    </ul>
                `,
                timeComplexity: "O(1) for access, O(n) for search",
                spaceComplexity: "O(n) for n elements",
                whenToUse: `
                    <ul>
                        <li>When you need fast access to elements by index</li>
                        <li>When the size of data is known and relatively fixed</li>
                        <li>For implementing other data structures</li>
                        <li>When memory usage needs to be predictable</li>
                    </ul>
                `,
                relatedPatterns: ["Two Pointers", "Sliding Window", "Prefix Sum", "Binary Search"]
            },
            2: { // Two Pointers
                concept: `
                    <p><strong>Two Pointers</strong> is a technique that uses two pointers (indices) to solve problems more efficiently than nested loops.</p>
                    <p><strong>Types:</strong></p>
                    <ul>
                        <li><strong>Opposite Direction:</strong> Start from both ends, move towards center</li>
                        <li><strong>Same Direction:</strong> Both start from beginning, move at different speeds</li>
                        <li><strong>Fast & Slow:</strong> One pointer moves faster than the other</li>
                    </ul>
                `,
                howItWorks: `
                    <p>Instead of using nested loops O(n²), two pointers can often solve problems in O(n) by intelligently moving through the array.</p>
                    <p><strong>Common Patterns:</strong></p>
                    <ul>
                        <li><strong>Target Sum:</strong> Move pointers based on current sum vs target</li>
                        <li><strong>Palindrome Check:</strong> Compare characters from both ends</li>
                        <li><strong>Remove Duplicates:</strong> Use slow pointer for unique elements</li>
                    </ul>
                `,
                timeComplexity: "O(n) - single pass through array",
                spaceComplexity: "O(1) - only using pointer variables",
                whenToUse: `
                    <ul>
                        <li>Array is sorted (or can be sorted)</li>
                        <li>Looking for pairs/triplets with specific properties</li>
                        <li>Need to avoid O(n²) nested loops</li>
                        <li>Finding patterns from both ends of array</li>
                    </ul>
                `,
                relatedPatterns: ["Sliding Window", "Binary Search", "Fast & Slow Pointers"]
            },
            3: { // Linked Lists
                concept: `
                    <p><strong>Linked Lists</strong> are linear data structures where elements (nodes) are stored in sequence, but not in contiguous memory locations.</p>
                    <p><strong>Components:</strong></p>
                    <ul>
                        <li><strong>Node:</strong> Contains data and pointer to next node</li>
                        <li><strong>Head:</strong> Reference to the first node</li>
                        <li><strong>Tail:</strong> Reference to the last node (optional)</li>
                    </ul>
                `,
                howItWorks: `
                    <p>Each node contains data and a reference (pointer) to the next node. Traversal requires following these pointers from head to tail.</p>
                    <p><strong>Operations:</strong></p>
                    <ul>
                        <li><strong>Access:</strong> Must traverse from head - O(n)</li>
                        <li><strong>Insert:</strong> At beginning O(1), elsewhere O(n)</li>
                        <li><strong>Delete:</strong> At beginning O(1), elsewhere O(n)</li>
                        <li><strong>Search:</strong> Linear traversal - O(n)</li>
                    </ul>
                `,
                timeComplexity: "O(1) for insertion/deletion at head, O(n) elsewhere",
                spaceComplexity: "O(n) for n nodes",
                whenToUse: `
                    <ul>
                        <li>Dynamic size requirements</li>
                        <li>Frequent insertions/deletions at beginning</li>
                        <li>Don't know the size in advance</li>
                        <li>Memory is not a constraint</li>
                    </ul>
                `,
                relatedPatterns: ["Fast & Slow Pointers", "Reverse Linked List", "Merge Lists"]
            }
        };

        // Add more theory content for levels 4-8
        const defaultTheory = {
            concept: `<p>This topic builds on fundamental concepts to solve more complex problems.</p>`,
            howItWorks: `<p>Understanding the underlying patterns and applying them systematically.</p>`,
            timeComplexity: "Varies by specific algorithm",
            spaceComplexity: "Varies by specific algorithm",
            whenToUse: `<ul><li>When simpler approaches aren't efficient enough</li></ul>`,
            relatedPatterns: ["Pattern Recognition", "Problem Decomposition"]
        };

        return theoryMappings[level] || defaultTheory;
    }

    checkVideoAchievements() {
        const videoCount = this.gameState.watchedVideos.size;
        const newAchievements = [];

        // Video watching milestones
        [5, 10, 25, 50].forEach(count => {
            const key = `video_${count}`;
            if (videoCount >= count && !this.gameState.achievements.has(key)) {
                newAchievements.push(key);
            }
        });

        // Show new achievements
        newAchievements.forEach(achievement => {
            if (!this.gameState.achievements.has(achievement)) {
                this.gameState.achievements.add(achievement);
                this.showAchievementNotification(achievement);
            }
        });
    }

    // Celebration and notification methods
    showCelebration() {
        const celebration = document.createElement('div');
        celebration.className = 'celebration';
        celebration.innerHTML = '🎉 Problem Solved! 🎉';
        document.body.appendChild(celebration);
        
        setTimeout(() => {
            celebration.remove();
        }, 2000);
    }

    showLevelUnlockNotification(level) {
        const notification = document.createElement('div');
        notification.className = 'level-unlock-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <h3>🎉 Level ${level} Unlocked!</h3>
                <p>${this.getLevelName(level)} is now available!</p>
                <button onclick="this.parentElement.parentElement.remove(); game.switchTab('${level}')">
                    Explore Level ${level} →
                </button>
            </div>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    showAchievementNotification(achievement) {
        const achievementNames = {
            'first_problem': 'First Steps! 🎯',
            'problem_10': 'Getting Started! 🚀',
            'problem_50': 'Problem Solver! 💪',
            'problem_100': 'Century Club! 💯',
            'streak_3': 'On Fire! 🔥',
            'streak_7': 'Weekly Warrior! ⚡',
            'streak_30': 'Unstoppable! 🌟',
            'level_1_complete': 'Array Master! 🔢',
            'level_2_complete': 'Pointer Pro! 👆',
            'level_3_complete': 'Data Structure Expert! 🔗',
            'level_4_complete': 'Recursion Ruler! 🌳',
            'level_5_complete': 'Graph Guru! 🗺️',
            'level_6_complete': 'DP Legend! 💎'
        };

        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-content">
                <h3>🏆 Achievement Unlocked!</h3>
                <p>${achievementNames[achievement] || 'New Achievement!'}</p>
            </div>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Export/Import functionality
    exportProgress() {
        const data = {
            gameState: {
                solvedProblems: Array.from(this.gameState.solvedProblems),
                unlockedLevels: Array.from(this.gameState.unlockedLevels),
                currentLevel: this.gameState.currentLevel,
                streak: this.gameState.streak,
                lastSolvedDate: this.gameState.lastSolvedDate,
                totalSolved: this.gameState.totalSolved,
                achievements: Array.from(this.gameState.achievements),
                theme: this.gameState.theme
            },
            exportDate: new Date().toISOString(),
            version: '1.0'
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `dsa-progress-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    importProgress(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (data.gameState) {
                    this.gameState.solvedProblems = new Set(data.gameState.solvedProblems);
                    this.gameState.unlockedLevels = new Set(data.gameState.unlockedLevels);
                    this.gameState.currentLevel = data.gameState.currentLevel;
                    this.gameState.streak = data.gameState.streak;
                    this.gameState.lastSolvedDate = data.gameState.lastSolvedDate;
                    this.gameState.totalSolved = data.gameState.totalSolved;
                    this.gameState.achievements = new Set(data.gameState.achievements);
                    this.gameState.theme = data.gameState.theme;
                    
                    this.saveGameState();
                    this.render();
                    
                    alert('Progress imported successfully! 🎉');
                }
            } catch (error) {
                alert('Error importing progress. Please check the file format.');
            }
        };
        reader.readAsText(file);
    }

    // Daily challenge system
    checkDailyChallenge() {
        const today = new Date().toDateString();
        const lastChallenge = localStorage.getItem('lastDailyChallenge');
        
        if (lastChallenge !== today) {
            this.generateDailyChallenge();
            localStorage.setItem('lastDailyChallenge', today);
        }
    }

    generateDailyChallenge() {
        const challenges = [
            "Solve 3 array problems today! 🎯",
            "Complete 1 problem from each unlocked level! 🌟",
            "Try a problem you haven't solved yet! 🚀",
            "Review 2 solved problems to reinforce learning! 📚",
            "Focus on your weakest topic today! 💪"
        ];
        
        const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
        
        // Show daily challenge notification
        setTimeout(() => {
            const notification = document.createElement('div');
            notification.className = 'daily-challenge-notification';
            notification.innerHTML = `
                <div class="challenge-content">
                    <h3>🌅 Daily Challenge</h3>
                    <p>${randomChallenge}</p>
                    <button onclick="this.parentElement.parentElement.remove()">Got it! 👍</button>
                </div>
            `;
            document.body.appendChild(notification);
        }, 2000);
    }

    renderAchievements() {
        const achievementGrid = document.getElementById('achievement-grid');
        if (!achievementGrid) return;
        
        const categories = ['milestone', 'level', 'streak', 'difficulty', 'speed', 'special'];
        let html = '';
        
        categories.forEach(category => {
            const categoryAchievements = Object.entries(achievements || {})
                .filter(([_, achievement]) => achievement.category === category);
            
            if (categoryAchievements.length > 0) {
                html += `<div class="achievement-category">
                    <h4>${category.charAt(0).toUpperCase() + category.slice(1)} Achievements</h4>
                    <div class="achievement-row">`;
                
                categoryAchievements.forEach(([key, achievement]) => {
                    const unlocked = this.gameState.achievements.has(key);
                    html += `
                        <div class="achievement ${unlocked ? 'unlocked' : 'locked'}">
                            <div class="achievement-icon">${achievement.icon}</div>
                            <div class="achievement-title">${achievement.title}</div>
                            <div class="achievement-desc">${achievement.description}</div>
                            ${unlocked ? '<div class="achievement-date">Unlocked!</div>' : ''}
                        </div>
                    `;
                });
                
                html += `</div></div>`;
            }
        });
        
        achievementGrid.innerHTML = html;
    }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing game...');
    console.log('dsaData available:', typeof window.dsaData !== 'undefined');
    if (typeof window.dsaData !== 'undefined') {
        console.log('Number of levels in data:', Object.keys(window.dsaData).length);
    }
    window.game = new DSAGame();
    console.log('Game initialized successfully');
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'r') {
        e.preventDefault();
        if (confirm('Reset all progress?')) {
            localStorage.removeItem('dsaGameState');
            location.reload();
        }
    }
});

window.YOUTUBE_API_KEY = 'AIzaSyDIZxeqxuNatNYCnsO1_D25oby3peaYEos';