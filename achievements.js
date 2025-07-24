// Achievement System for DSA Adventure Planner

const achievements = {
    // Progress Milestones
    'first_problem': {
        title: 'First Steps! 🎯',
        description: 'Solved your very first problem!',
        icon: '🎯',
        category: 'milestone',
        unlocked: false
    },
    'problem_10': {
        title: 'Getting Started! 🚀',
        description: 'Solved 10 problems - you\'re on a roll!',
        icon: '🚀',
        category: 'milestone',
        unlocked: false
    },
    'problem_25': {
        title: 'Quarter Century! 🎊',
        description: 'Reached 25 solved problems!',
        icon: '🎊',
        category: 'milestone',
        unlocked: false
    },
    'problem_50': {
        title: 'Half Century! 💪',
        description: 'Solved 50 problems - halfway to mastery!',
        icon: '💪',
        category: 'milestone',
        unlocked: false
    },
    'problem_100': {
        title: 'Century Club! 💯',
        description: 'Joined the exclusive 100 problems club!',
        icon: '💯',
        category: 'milestone',
        unlocked: false
    },
    'problem_200': {
        title: 'Double Century! 🔥',
        description: 'Solved 200 problems - you\'re unstoppable!',
        icon: '🔥',
        category: 'milestone',
        unlocked: false
    },
    'problem_300': {
        title: 'Triple Threat! ⚡',
        description: 'Conquered 300 problems - algorithm master!',
        icon: '⚡',
        category: 'milestone',
        unlocked: false
    },
    'problem_400': {
        title: 'Perfectionist! 👑',
        description: 'Solved all 400+ problems - absolute legend!',
        icon: '👑',
        category: 'milestone',
        unlocked: false
    },

    // Video Learning Achievements
    'video_5': {
        title: 'Eager Learner! 📺',
        description: 'Watched 5 tutorial videos - visual learning!',
        icon: '📺',
        category: 'learning',
        unlocked: false
    },
    'video_10': {
        title: 'Video Scholar! 🎬',
        description: 'Watched 10 tutorial videos - expanding knowledge!',
        icon: '🎬',
        category: 'learning',
        unlocked: false
    },
    'video_25': {
        title: 'Visual Master! 🎭',
        description: 'Watched 25 tutorial videos - multimedia learner!',
        icon: '🎭',
        category: 'learning',
        unlocked: false
    },
    'video_50': {
        title: 'Video Champion! 🏅',
        description: 'Watched 50 tutorial videos - learning machine!',
        icon: '🏅',
        category: 'learning',
        unlocked: false
    },
    'theory_explorer': {
        title: 'Theory Explorer! 📚',
        description: 'Read theory for 10 different problems!',
        icon: '📚',
        category: 'learning',
        unlocked: false
    },
    'knowledge_seeker': {
        title: 'Knowledge Seeker! 📖',
        description: 'Saved notes for 10 different problems!',
        icon: '📖',
        category: 'learning',
        unlocked: false
    },
    'favorite_collector': {
        title: 'Favorite Collector! ⭐',
        description: 'Marked 15 problems as favorites!',
        icon: '⭐',
        category: 'learning',
        unlocked: false
    },

    // Streak Achievements
    'streak_3': {
        title: 'On Fire! 🔥',
        description: 'Solved problems for 3 days in a row!',
        icon: '🔥',
        category: 'streak',
        unlocked: false
    },
    'streak_7': {
        title: 'Weekly Warrior! ⚡',
        description: 'Maintained a 7-day solving streak!',
        icon: '⚡',
        category: 'streak',
        unlocked: false
    },
    'streak_14': {
        title: 'Two Week Champion! 🏆',
        description: 'Incredible 14-day problem solving streak!',
        icon: '🏆',
        category: 'streak',
        unlocked: false
    },
    'streak_30': {
        title: 'Monthly Master! 🌟',
        description: 'Unstoppable 30-day streak - dedication incarnate!',
        icon: '🌟',
        category: 'streak',
        unlocked: false
    },
    'streak_100': {
        title: 'Centurion Streak! 💎',
        description: 'Legendary 100-day streak - algorithm deity!',
        icon: '💎',
        category: 'streak',
        unlocked: false
    },

    // Level Completion Achievements
    'level_1_complete': {
        title: 'Array Master! 🔢',
        description: 'Completed all Arrays & Loops problems!',
        icon: '🔢',
        category: 'level',
        unlocked: false
    },
    'level_2_complete': {
        title: 'Pointer Pro! 👆',
        description: 'Mastered Two Pointers & Hashing!',
        icon: '👆',
        category: 'level',
        unlocked: false
    },
    'level_3_complete': {
        title: 'Structure Specialist! 🔗',
        description: 'Conquered Linked Lists & Stacks!',
        icon: '🔗',
        category: 'level',
        unlocked: false
    },
    'level_4_complete': {
        title: 'Recursion Ruler! 🌳',
        description: 'Dominated Strings & Recursion!',
        icon: '🌳',
        category: 'level',
        unlocked: false
    },
    'level_5_complete': {
        title: 'Graph Guru! 🕸️',
        description: 'Perfected Trees & Graphs!',
        icon: '🕸️',
        category: 'level',
        unlocked: false
    },
    'level_6_complete': {
        title: 'DP Legend! ⚡',
        description: 'Mastered Dynamic Programming!',
        icon: '⚡',
        category: 'level',
        unlocked: false
    },
    'level_7_complete': {
        title: 'Sorting Sage! 📊',
        description: 'Perfected Heaps & Sorting!',
        icon: '📊',
        category: 'level',
        unlocked: false
    },
    'level_8_complete': {
        title: 'Algorithm Architect! 🏛️',
        description: 'Conquered Advanced Topics!',
        icon: '🏛️',
        category: 'level',
        unlocked: false
    },

    // Speed Achievements
    'speed_demon': {
        title: 'Speed Demon! 💨',
        description: 'Solved 10 problems in one day!',
        icon: '💨',
        category: 'speed',
        unlocked: false
    },
    'marathon_runner': {
        title: 'Marathon Runner! 🏃',
        description: 'Solved 25 problems in one day!',
        icon: '🏃',
        category: 'speed',
        unlocked: false
    },

    // Difficulty Achievements
    'easy_explorer': {
        title: 'Easy Explorer! 🌱',
        description: 'Solved 50 easy problems!',
        icon: '🌱',
        category: 'difficulty',
        unlocked: false
    },
    'medium_master': {
        title: 'Medium Master! 🌿',
        description: 'Solved 100 medium problems!',
        icon: '🌿',
        category: 'difficulty',
        unlocked: false
    },
    'hard_hero': {
        title: 'Hard Hero! 🌳',
        description: 'Solved 50 hard problems!',
        icon: '🌳',
        category: 'difficulty',
        unlocked: false
    },

    // Special Achievements
    'night_owl': {
        title: 'Night Owl! 🦉',
        description: 'Solved problems after midnight!',
        icon: '🦉',
        category: 'special',
        unlocked: false
    },
    'early_bird': {
        title: 'Early Bird! 🐦',
        description: 'Solved problems before 6 AM!',
        icon: '🐦',
        category: 'special',
        unlocked: false
    },
    'perfectionist': {
        title: 'Perfectionist! ✨',
        description: 'Completed an entire level without hints!',
        icon: '✨',
        category: 'special',
        unlocked: false
    },
    'comeback_kid': {
        title: 'Comeback Kid! 🔄',
        description: 'Returned after a 30+ day break!',
        icon: '🔄',
        category: 'special',
        unlocked: false
    },
    'theme_switcher': {
        title: 'Theme Switcher! 🎨',
        description: 'Tried both light and dark themes!',
        icon: '🎨',
        category: 'special',
        unlocked: false
    },
    'social_sharer': {
        title: 'Social Sharer! 📱',
        description: 'Exported your progress to share!',
        icon: '📱',
        category: 'special',
        unlocked: false
    }
};

// Daily Challenge Templates
const dailyChallenges = [
    {
        title: "Array Explorer",
        description: "Solve 3 array problems today!",
        target: 3,
        category: "arrays",
        reward: "🔢 Array Adventurer Badge"
    },
    {
        title: "Speed Solver",
        description: "Solve 5 problems in any category!",
        target: 5,
        category: "any",
        reward: "⚡ Speed Solver Badge"
    },
    {
        title: "New Territory",
        description: "Try a problem from a new level!",
        target: 1,
        category: "new_level",
        reward: "🗺️ Explorer Badge"
    },
    {
        title: "Consistency Champion",
        description: "Solve at least 1 problem to maintain your streak!",
        target: 1,
        category: "streak",
        reward: "🔥 Streak Keeper Badge"
    },
    {
        title: "Level Focus",
        description: "Complete 4 problems from your current level!",
        target: 4,
        category: "current_level",
        reward: "🎯 Focus Master Badge"
    },
    {
        title: "Mixed Practice",
        description: "Solve 2 easy and 1 medium problem!",
        target: 3,
        category: "mixed",
        reward: "🌈 Variety Badge"
    },
    {
        title: "Algorithm Deep Dive",
        description: "Spend time on 2 challenging problems!",
        target: 2,
        category: "challenging",
        reward: "🧠 Deep Thinker Badge"
    }
];

// Achievement checking functions
function checkAchievements(gameState) {
    const newAchievements = [];
    
    // Check problem count milestones
    const milestones = [1, 10, 25, 50, 100, 200, 300, 400];
    milestones.forEach(count => {
        const key = count === 1 ? 'first_problem' : `problem_${count}`;
        if (gameState.totalSolved >= count && !gameState.achievements.has(key)) {
            newAchievements.push(key);
        }
    });
    
    // Check streak achievements
    const streakMilestones = [3, 7, 14, 30, 100];
    streakMilestones.forEach(days => {
        const key = `streak_${days}`;
        if (gameState.streak >= days && !gameState.achievements.has(key)) {
            newAchievements.push(key);
        }
    });
    
    // Check level completion
    for (let level = 1; level <= 8; level++) {
        const key = `level_${level}_complete`;
        if (isLevelComplete(level, gameState) && !gameState.achievements.has(key)) {
            newAchievements.push(key);
        }
    }
    
    // Check difficulty-based achievements
    const difficultyCount = countByDifficulty(gameState);
    if (difficultyCount.easy >= 50 && !gameState.achievements.has('easy_explorer')) {
        newAchievements.push('easy_explorer');
    }
    if (difficultyCount.medium >= 100 && !gameState.achievements.has('medium_master')) {
        newAchievements.push('medium_master');
    }
    if (difficultyCount.hard >= 50 && !gameState.achievements.has('hard_hero')) {
        newAchievements.push('hard_hero');
    }
    
    // Check special time-based achievements
    const currentHour = new Date().getHours();
    if (currentHour >= 0 && currentHour < 6 && !gameState.achievements.has('early_bird')) {
        newAchievements.push('early_bird');
    }
    if (currentHour >= 23 || currentHour < 2 && !gameState.achievements.has('night_owl')) {
        newAchievements.push('night_owl');
    }
    
    return newAchievements;
}

function isLevelComplete(level, gameState) {
    if (!dsaData[level]) return false;
    
    const totalProblems = dsaData[level].problems.length;
    const solvedProblems = Array.from(gameState.solvedProblems)
        .filter(id => id.startsWith(`${level}-`)).length;
    
    return solvedProblems === totalProblems;
}

function countByDifficulty(gameState) {
    const count = { easy: 0, medium: 0, hard: 0 };
    
    gameState.solvedProblems.forEach(problemId => {
        const [level, index] = problemId.split('-').map(Number);
        const problem = dsaData[level]?.problems[index];
        if (problem) {
            count[problem.difficulty]++;
        }
    });
    
    return count;
}

function getRandomDailyChallenge() {
    return dailyChallenges[Math.floor(Math.random() * dailyChallenges.length)];
}

function renderAchievements(gameState) {
    const achievementGrid = document.getElementById('achievement-grid');
    if (!achievementGrid) return;
    
    const categories = ['milestone', 'level', 'streak', 'difficulty', 'speed', 'special'];
    let html = '';
    
    categories.forEach(category => {
        const categoryAchievements = Object.entries(achievements)
            .filter(([_, achievement]) => achievement.category === category);
        
        if (categoryAchievements.length > 0) {
            html += `<div class="achievement-category">
                <h4>${category.charAt(0).toUpperCase() + category.slice(1)} Achievements</h4>
                <div class="achievement-row">`;
            
            categoryAchievements.forEach(([key, achievement]) => {
                const unlocked = gameState.achievements.has(key);
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

// Export functions for use in main game
window.achievements = achievements;
window.dailyChallenges = dailyChallenges;
window.checkAchievements = checkAchievements;
window.getRandomDailyChallenge = getRandomDailyChallenge;
window.renderAchievements = renderAchievements;
