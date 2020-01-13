REM https://serverfault.com/questions/95686/change-current-directory-to-the-batch-file-directory
cd /D "%~dp0"
echo|set /P ="%1" > dirs.txt
REM https://superuser.com/a/446723

@ECHO OFF
echo.
echo Closing Explorer...
echo.
TASKKILL /F /IM explorer.exe
echo.
echo Starting Explorer...
start explorer.exe
echo.

:: https://stackoverflow.com/a/1672349
ping 127.0.0.1 -n 2 > nul
echo Opening Explorer...
%SystemRoot%\explorer.exe
ping 127.0.0.1 -n 2 > nul
echo Opening read.js...
read.js
echo Finsihed everything!