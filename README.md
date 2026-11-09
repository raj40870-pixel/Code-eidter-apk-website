# CodeEditor IDE - Official Web Portal & Download Hub 🌐

### *The Official Landing Page, Setup Guide, and APK Distribution Platform for CodeEditor IDE on Android*



[![Live on Vercel](https://img.shields.io/badge/Website-Live_on_Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://code-eidter-apk-website.vercel.app/)

[![Indus Appstore](https://img.shields.io/badge/Indus_Appstore-Live_on_Store-00C853?style=for-the-badge&logo=googleplay&logoColor=white)](https://www.phonepeappstore.com/apps/education/code-editor/app.code.editor/?page=details&id=app.code.editor)

[![Latest Release](https://img.shields.io/badge/Latest_Release-v1.4.8_Store_Build-success?style=for-the-badge&logo=android&logoColor=white)](https://www.phonepeappstore.com/apps/education/code-editor/app.code.editor/?page=details&id=app.code.editor)

[![Upcoming Release](https://img.shields.io/badge/Upcoming_Release-v1.40_(Coming_Soon)-orange?style=for-the-badge&logo=android&logoColor=white)](https://www.phonepeappstore.com/apps/education/code-editor/app.code.editor/?page=details&id=app.code.editor)

[![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)](LICENSE)



---



## 🌐 Official Website Portal



- 🔗 **Official Website Portal**: [https://code-eidter-apk-website.vercel.app/](https://code-eidter-apk-website.vercel.app/)

- 🏪 **Official Store Listing (Indus Appstore)**: [CodeEditor IDE on Indus Appstore](https://www.phonepeappstore.com/apps/education/code-editor/app.code.editor/?page=details&id=app.code.editor)

- 📱 **Current Release**: Version 1.4.8 (Target SDK 36, versionCode 35, package `app.code.editor`) — Live on Indian App Store.

- 🚀 **Upcoming Release (Coming Soon on Indus Appstore)**: Version 1.40 (versionCode 37, Target SDK 36) — *Upcoming*. Features built-in Linux Environment CDN integration (`bootstrap-aarch64.zip` on official library repository CDN), multi-hop CDN redirect handling for compiler toolchains, smart Java class cache sync (`$HOME/.bin_cache`), zero duplicate workspace files, and full Indus Appstore compliance.



---



---

## 🚀 Version Evolution: What's New in v1.4.9 & v1.40

### ⚡ What's New in Version 1.40 (versionCode 37, Target SDK 36) — Upcoming Release
- 🌐 **Built-in Linux Environment CDN Integration**:
  - The complete official Linux bootstrap environment (`bootstrap-aarch64.zip`, 32.8 MB) is permanently hosted directly on the official `library` CDN (`v1.3.1`), completely bypassing external Termux server 504 Gateway Time-out failures.
  - Multi-hop redirect handling with automatic fallback mirrors for instantaneous, 1-click Linux environment installation.
- ⚡ **Multi-Hop CDN Redirect Handling for Compiler Toolchains**:
  - Upgraded `ToolchainInstaller.java` to support multi-hop redirect chains up to 6 hops across GitHub Releases CDN and Azure cloud blob storage.
  - Generous timeouts (45s connect, 120s read) and real SHA-256 integrity verification ensuring zero incomplete or corrupted package downloads.
- 🏪 **Indus Appstore Version Code 37 Compliance**:
  - Incremented `versionCode` to 37 and `versionName` to `1.40` for seamless in-progress app update submission on Indus Appstore (PhonePe) without draft conflicts.
- 🛠️ **Official Terminal `install.sh` Integration**:
  - Deployed official `install.sh` on `main` branch of library repository for terminal-based toolchain installations supporting both `app.code.editor` and custom `$PREFIX` paths.

### 🛠️ What's New in Version 1.4.9 (versionCode 36, Target SDK 36)
- 📂 **Smart Java Class Sync to Build Cache (`$HOME/.bin_cache`)**:
  - **Zero Duplicate Files in User Workspace**: Completely resolved the duplicate Java file creation bug where running files like `class.java` or `main.java` previously generated extra `.java` source files in the project directory.
  - **Isolated Build Cache Execution**: All class synchronization and compilation artifacts are strictly routed to the isolated `$HOME/.bin_cache` sandbox, keeping user workspaces pristine.
  - **Exact Filename Retention**: File creation preserves exact user-typed names without forced casing modifications.
  - **Automated 24-Hour Cache Lifecycle**: Temporary compilation artifacts in `$HOME/.bin_cache` are managed and automatically purged after 24 hours.

## 🌟 Overview



This repository hosts the source code, assets, and deployment configuration for the **CodeEditor IDE (TermCode)** official web portal, deployed live at [**https://code-eidter-apk-website.vercel.app/**](https://code-eidter-apk-website.vercel.app/).



The portal serves official APK downloads, visual walkthroughs, and compiler setup guides. The Android app checks `version.json` and supports manual verification via this website portal.



---



## ✨ Portal Features



- **⚡ Official Web Download Hub**: Direct download portal for the signed v1.4.8 APK (`CodeEditor-v1.4.8.apk`, Target SDK 36 Compatibility Mode, versionCode 35, package `app.code.editor`).

- **📦 Standardized Package Name (`app.code.editor`)**: Clean, store-compliant package ID tailored for Indus Appstore and Android ecosystems.

- **⚡ Pure Java Kotlin Compilation Engine**: Direct execution via OpenJDK 21 and `kotlin-compiler.jar` without external bash dependencies.

- **⚡ Direct Mono C# Compilation Engine**: Bypasses broken Termux shebang wrappers by directly executing `mono "$MONO_PATH/mcs.exe"`.

- **⚡ Universal Shell (.sh) Execution**: Built-in `/system/bin/sh` fallback for seamless shell script execution across all Android devices.

- **🛡️ Self-Healing Environment Wrappers**: Automatically provisions fallback `/bin/sh` and `/bin/bash` wrappers.

- **⚡ Bulletproof Zero-ELOOP Toolchain Extraction**: Eliminates `Too many symbolic links encountered` and directory collision failures during Clang and Rust package unpacking.

- **⚡ Physical Shared Library Materialization Engine**: Completely resolves Android dynamic linker crashes (`CANNOT LINK EXECUTABLE "clang++": library "libz.so.1" not found`) with automated physical file materialization and platform fallbacks.

- **🔄 Manual Website-Driven Update Verification**: Clean in-app version check that directs users directly to the website download portal.

- **📦 Edge-to-Edge System WindowInsets Fix**: Seamless status bar and navigation bar insets preventing overlaps on modern Android devices.

- **📱 Interactive Visual Setup Guide**: Real app screenshots illustrating project explorer, multi-tab editing, smart coding keyboard, embedded Linux terminal compilation, and live web previews with high-resolution lightbox modal zoom.

- **📄 APK Metadata (`version.json`)**: Live endpoint for in-app version verification and direct downloads.

- **🛠️ 15+ Compilers & Language Showcase**: Starter templates and guides for C, C++, Python, Java, Node.js Full-Stack, HTML/CSS Web, TypeScript, Go, Rust, Kotlin, C# Mono, PHP, Ruby, and Lua.

- **🎨 Modern Developer-Focused UI**: Built with pure semantic HTML5, CSS3, and vanilla JavaScript—zero heavy frameworks, lightning-fast first contentful paint (FCP), and full mobile responsiveness.

- **☁️ Continuous Vercel Deployment**: Configured with `vercel.json` for instantaneous atomic deployments upon Git push.



---





---



## 🗺️ Search Engine Optimization & Google Search Console



- 🌐 **Live XML Sitemap**: [https://code-eidter-apk-website.vercel.app/sitemap.xml](https://code-eidter-apk-website.vercel.app/sitemap.xml)

- 🤖 **Live Robots.txt**: [https://code-eidter-apk-website.vercel.app/robots.txt](https://code-eidter-apk-website.vercel.app/robots.txt)

- 🔍 **Google Search Console Verification**: `google61d8850f40d616b0.html` (Domain Ownership Verified)

- 📄 **Included Indexed Pages**:

  - `https://code-eidter-apk-website.vercel.app/` (Home / Official App Portal & Setup Guide)

  - `https://code-eidter-apk-website.vercel.app/privacy` (Privacy Policy & Compliance)

  - `https://code-eidter-apk-website.vercel.app/version.json` (Live In-App Version & OTA Verification Endpoint)



## 📄 Published APK Metadata (`version.json`)



This file records the current direct-download APK details:



**Live Endpoint**: [https://code-eidter-apk-website.vercel.app/version.json](https://code-eidter-apk-website.vercel.app/version.json)



```json

{

  "versionCode": 35,

  "versionName": "1.4.8",

  "storeUrl": "https://www.phonepeappstore.com/apps/education/code-editor/app.code.editor/?page=details&id=app.code.editor",

  "apkUrl": "https://www.phonepeappstore.com/apps/education/code-editor/app.code.editor/?page=details&id=app.code.editor",

  "websiteUrl": "https://code-eidter-apk-website.vercel.app/",

  "releaseNotes": "CodeEditor IDE v1.4.8 (versionCode 35, Target SDK 36 Compatibility Mode, package app.code.editor): Officially published live on Indus Appstore (PhonePe). 15+ offline programming languages on Android 7-16.",

  "publishedAt": "2026-10-29"

}

```



---



## 🚀 How to Publish a New APK Release



When a new version of CodeEditor IDE is built:



1. **Place the New APK**:

   Copy the newly generated release APK into the `apk/` directory:

   ```bash

   cp app/build/outputs/apk/release/app-release.apk apk/CodeEditor-v1.x.x.apk

   ```



2. **Update `version.json`**:

   Update `versionCode`, `versionName`, `apkUrl`, and `releaseNotes` in `version.json`.



3. **Update Download Links in `index.html`**:

   Update the version badges and download button href attributes in `index.html`.



4. **Commit & Push**:

   ```bash

   git add apk/ version.json index.html README.md

   git commit -m "chore: release CodeEditor IDE v1.x.x"

   git push origin main

   ```

   *Vercel automatically detects the commit and deploys the new release within seconds!*



---



## 📂 Repository Structure



```text

code-editor-website/

├── apk/

│   ├── CodeEditor-v1.40.apk    # Backup signed release (target SDK 36, versionCode 37)

│   └── CodeEditor-latest.apk   # Same APK as CodeEditor-v1.40.apk

├── assets/

│   └── images/                 # App logos, banners, and screenshots

│       ├── logo.png

│       ├── logo-banner.jpg

│       ├── termcode-1-clean.jpg

│       ├── termcode-2-clean.jpg

│       └── ...

├── css/

│   └── style.css               # Modern dark-mode IDE aesthetic stylesheet

├── js/

│   └── main.js                 # Smooth scroll, lightbox modal & interactive logic

├── index.html                  # Main web portal and download landing page

├── version.json                # In-app OTA update verification manifest

├── vercel.json                 # Vercel caching, headers & routing configuration

└── README.md                   # Web portal documentation

```



---



## 📄 License



This website portal and documentation are licensed under the [MIT License](LICENSE).

CodeEditor IDE is free and open-source software built for developers worldwide! 💻📱

