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

%SystemRoot%\explorer.exe

"send_shortcut.ahk"