@echo off
echo Setting up Git repository for DSA Adventure Planner...

REM Initialize git repository
git init

REM Add all files except those in .gitignore
git add .

REM Create initial commit
git commit -m "Initial commit: DSA Adventure Planner with YouTube integration"

echo.
echo Repository initialized!
echo.
echo Next steps:
echo 1. Create a new repository on GitHub
echo 2. Run: git remote add origin https://github.com/yourusername/dsa-adventure-planner.git
echo 3. Run: git branch -M main
echo 4. Run: git push -u origin main
echo 5. Enable GitHub Pages in repository settings
echo.
echo Optional: Add your YouTube API key as a GitHub secret named 'YOUTUBE_API_KEY'
echo.
pause
