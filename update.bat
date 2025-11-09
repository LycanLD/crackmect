@echo off
setlocal enabledelayedexpansion

for /f "tokens=*" %%b in ('git rev-parse --abbrev-ref HEAD') do set branch=%%b

echo.
echo Current branch: %branch%
set /p msg=Enter commit message: 

git add .
git commit -m "%msg%"
git push origin %branch%

echo.
echo Pushed to branch: %branch%
pause
