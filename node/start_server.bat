set TEMP=%~dp0
set PATH=%TEMP%node_modules\.bin;%PATH%
node-dev server.js
