@echo off
REM Check if .git directory exists
IF NOT EXIST ".git" (
    echo Initializing git repository...
    git init
) ELSE (
    echo Git repository already initialized.
)

REM Add all files to staging
echo Adding files to git...
git add .

REM Commit changes
echo Committing changes...
git commit -m "Deploy project commit"

REM Check if remote origin is set
git remote get-url origin >nul 2>&1
IF ERRORLEVEL 1 (
    echo Adding remote origin...
    git remote add origin https://github.com/Govind440/My-portfolio.git
) ELSE (
    echo Remote origin already set.
)

REM Push to GitHub
echo Pushing to GitHub...
git push -u origin master

REM Deploy to Vercel
echo Deploying to Vercel...
vercel --prod

echo Deployment complete.
pause
