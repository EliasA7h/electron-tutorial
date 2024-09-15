# Electron Tutorial

## ElectronをWSL2上で動かす

- 参考

  - [Windows10 WSL2でUbuntu上にElectronをインストールして表示するまでの環境構築をする](https://web.to-love-it.co.jp/install-electron-on-ubuntu/)

WSL2上でXの設定をせずに動かしたいので、以下の手順でElectronをインストール。

1. Electronのインストール

    ```console
    npm install --save-dev electron --platform=win32
    ```

1. package.jsonのstartを以下のように設定

    <!--
    ```json
    "start": "DISPLAY=\"${DISPLAY:=:0}\" ./node_modules/.bin/electron --disable-gpu ./main.js --platform=win32",
    ```
    -->

    ```json
    "start": "electron . --platform=win32",
    ```

1. main.jsのrequire("electron/main")の下に設定を追加

    ```json
    const { app, BrowserWindow } = require("electron/main")

    app.disableHardwareAcceleration()
    app.commandLine.appendSwitch("disable-gpu-sandbox")
    app.commandLine.appendSwitch("ignore-gpu-blacklist")
    app.commandLine.appendSwitch("no-sandbox")
    ```
