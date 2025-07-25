# 🚀 DSA Adventure Planner

A gamified learning platform for mastering Data Structures and Algorithms with real YouTube video integration!

🌐 **Live Demo**: https://srivtx.github.io/dsa-adventure-planner

## ✨ Features

1. Clone this repository:
```bash
git clone https://github.com/yourusername/dsa-adventure-planner.git
cd dsa-adventure-planner
```

2. Create a `config.js` file for your YouTube API key:
```javascript
window.YOUTUBE_API_KEY = 'your-youtube-api-key-here';
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

## 🚀 Deploy to GitHub Pages

### Option 1: Without YouTube API (Recommended for Public)
- Simply push your code to GitHub
- Enable GitHub Pages in repository settings
- The app will work with mock video data

### Option 2: With YouTube API (Use Environment Variables)
- Set up GitHub Secrets for your API key
- Use GitHub Actions to inject the key during build
- See `.github/workflows/deploy.yml` for setup

## 📁 Project Structure

```
dsa-adventure-planner/
├── index.html              # Main HTML file
├── styles.css              # Main stylesheet
├── video-styles.css        # Video modal styles
├── game.js                 # Main game logic
├── data.js                 # Problem data
├── achievements.js         # Achievement definitions
├── config.js               # Local config (not committed)
└── README.md              # This file
```

## 🔑 YouTube API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable YouTube Data API v3
4. Create credentials (API Key)
5. Restrict the key to YouTube Data API v3
6. Add your domain to HTTP referrers (for production)

## 🎮 How to Play

1. **Start with Level 1**: Arrays & Loops
2. **Solve Problems**: Mark problems as solved to track progress
3. **Watch Videos**: Click "🎬 Watch Video" for tutorial content
4. **Learn Theory**: Deep dive into concepts with "📚 Learn Theory"
5. **Practice Code**: Use the built-in code editor
6. **Unlock Levels**: Complete levels to unlock advanced topics
7. **Earn Achievements**: Track your learning milestones

## 🏆 Achievement System

- **Problem Milestones**: 1, 10, 25, 50, 100+ problems solved
- **Streak Rewards**: Daily solving streaks
- **Video Learning**: Watch educational content
- **Level Completion**: Master each topic area
- **Knowledge Seeker**: Take detailed notes

## 🎨 Customization

- **Themes**: Switch between light and dark modes
- **Progress Tracking**: Export/import your learning data
- **Personal Notes**: Add notes to each problem
- **Favorites**: Mark problems for quick access

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- YouTube Data API for video content
- Google Fonts for typography
- Emoji icons for visual elements
- Open source community for inspiration

---

**Happy Learning! 🚀📚**

Start your DSA journey today and level up your programming skills!
