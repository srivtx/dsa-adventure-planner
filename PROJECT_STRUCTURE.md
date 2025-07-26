# 📁 DSA Adventure Planner - Project Structure

## 🏗️ **Organized File Structure**

```
dsa-adventure-planner/
├── 📄 index.html                 # Main application entry point
├── 📋 PROJECT_STRUCTURE.md       # This file - project organization
├── 🔧 .gitignore                 # Git ignore rules
│
├── 📂 src/                       # Source code directory
│   ├── 📂 css/                   # Stylesheets
│   │   ├── 🎨 styles-supabase.css      # Main Supabase-inspired theme
│   │   ├── 🎨 analytics-styles.css     # Analytics dashboard styles
│   │   ├── 🎨 code-editor-styles.css   # Code editor styling
│   │   ├── 🎨 video-styles.css         # Video player styles
│   │   ├── 🎨 quick-actions-styles.css # Quick actions UI
│   │   ├── 🎨 recommendations-styles.css # Recommendations UI
│   │   ├── 🎨 study-session-styles.css  # Study session styles
│   │   ├── 🎨 styles-modern.css        # Modern theme variant
│   │   └── 🎨 styles.css               # Base styles
│   │
│   └── 📂 js/                    # JavaScript modules
│       ├── ⚙️ game.js                   # Main game logic & navigation
│       ├── 📊 analytics.js              # Progress tracking & analytics
│       ├── 🏆 achievements.js           # Achievement system
│       ├── 💾 data.js                   # Problem data & content
│       ├── 🖥️ code-editor.js            # Code editor functionality
│       ├── ⚡ quick-actions.js          # Quick action features
│       ├── 💡 recommendations.js       # Smart recommendations
│       └── 📚 study-session.js          # Study session management
│
├── 📂 tests/                     # Test files & debugging tools
│   ├── 🧪 analytics-debug.html         # Analytics testing page
│   ├── 🧪 analytics-test.html          # Analytics functionality test
│   ├── 🧪 tab-test.html                # Tab navigation test
│   └── 🧪 test.html                    # General testing page
│
├── 📂 docs/                      # Documentation
│   ├── 📚 README.md                    # Main project documentation
│   ├── ⭐ FEATURES.md                  # Feature list & descriptions
│   └── 🔧 FIX_SUMMARY.md              # Bug fixes & improvements log
│
└── 📂 .github/                   # GitHub configuration
    └── (GitHub workflows & templates)
```

## 🎯 **Key Components**

### **Main Application (`index.html`)**
- Entry point for the DSA learning platform
- Includes all necessary CSS and JS modules
- **Analytics tab is the active/default tab**
- Contains real-time analytics dashboard (no mock data)

### **Core JavaScript Modules**
- **`game.js`** - Central application logic, tab switching, level management
- **`analytics.js`** - Real-time progress tracking and dashboard generation
- **`data.js`** - Problem sets, learning content, and educational data
- **`achievements.js`** - Gamification system with badges and milestones

### **Styling System**
- **`styles-supabase.css`** - Main theme with dark mode and modern design
- Component-specific styles for different features
- Responsive design for mobile and desktop

### **Testing & Debug Tools**
- Isolated test pages for debugging specific features
- Analytics testing tools to verify functionality
- Tab navigation test utilities

## 🚀 **Getting Started**

1. **Main App**: Open `index.html` in your browser
2. **Default View**: Analytics tab opens by default showing real progress data
3. **Testing**: Use files in `tests/` folder to debug specific features
4. **Development**: Edit files in `src/` directory

## 📱 **Features**

- ✅ **Real-time Analytics**: Track progress, streaks, and study time (DEFAULT TAB)
- ✅ **Interactive Learning**: Step-by-step DSA tutorials
- ✅ **Achievement System**: Gamified learning with badges
- ✅ **Responsive Design**: Works on desktop and mobile
- ✅ **Dark Theme**: Easy on the eyes for long study sessions
- ✅ **Progress Tracking**: Visual feedback on learning journey

## 🔧 **Development Notes**

- **Analytics tab is active by default** when page loads
- All file paths updated to use organized src/ structure
- CSS and JS files are modular and can be developed independently
- Test files help isolate and debug specific features
- Clean separation between source code, tests, and documentation
- Real analytics data (no mock/sample data buttons)

---
*Generated on July 26, 2025 - DSA Adventure Planner v2.0*
