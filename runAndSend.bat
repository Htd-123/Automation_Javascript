@echo off
echo Running tests...
npx playwright test


echo Sending email...   
node sendReport.js