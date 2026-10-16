# CodeEditor IDE - Official Web Portal & Download Hub 🌐
### *The Official Landing Page, Setup Guide, and APK Distribution Platform for CodeEditor IDE on Android*

[![Live on Vercel](https://img.shields.io/badge/Website-Live_on_Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://code-eidter-apk-website.vercel.app/)
[![Latest Release](https://img.shields.io/badge/Latest_Release-v1.4.4_Signed-success?style=for-the-badge&logo=android&logoColor=white)](https://code-eidter-apk-website.vercel.app/apk/CodeEditor-v1.4.4.apk)
[![Android App Repo](https://img.shields.io/badge/Android_App-code--eidter--app-blue?style=for-the-badge&logo=github&logoColor=white)](https://github.com/raj40870-pixel/code-eidter-app)
[![Compiler CDN](https://img.shields.io/badge/Compiler_Library-Official_CDN-purple?style=for-the-badge&logo=gnubash&logoColor=white)](https://github.com/raj40870-pixel/library)
[![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)](LICENSE)

---

## 🌐 Ecosystem Quick Links

- 🔗 **Official Website**: [https://code-eidter-apk-website.vercel.app/](https://code-eidter-apk-website.vercel.app/)
- ⬇️ **Latest Direct APK Download (v1.4.4)**: [Download CodeEditor-v1.4.4.apk](https://code-eidter-apk-website.vercel.app/apk/CodeEditor-v1.4.4.apk) *(Target SDK 34 Compatibility Mode, versionCode 31, signed package `com.rajkumar.codereditor`)*
- 📱 **Official Android App Repository**: [raj40870-pixel/code-eidter-app](https://github.com/raj40870-pixel/code-eidter-app)
- 🗃️ **Compiler Toolchains CDN**: [raj40870-pixel/library](https://github.com/raj40870-pixel/library)

---

## 🌟 Overview

This repository hosts the source code, assets, and deployment configuration for the **CodeEditor IDE (TermCode)** official web portal, deployed live at [**https://code-eidter-apk-website.vercel.app/**](https://code-eidter-apk-website.vercel.app/).

The portal serves APK downloads, visual walkthroughs, and compiler setup guides. The Android app checks `version.json` and supports manual verification via this website portal.

---

## ✨ Portal Features

- **⚡ Direct 1-Click APK Download**: Download the signed v1.4.4 APK (`CodeEditor-v1.4.4.apk`, Target SDK 34 Compatibility Mode, versionCode 31, package `com.rajkumar.codereditor`).
- **⚡ Kotlin kotlinc Execution via Bash Engine**: Eliminates syntax errors on line 29 of `kotlinc` by executing directly via `bash` with Java OpenJDK 21.
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

## 📄 Published APK Metadata (`version.json`)

This file records the current direct-download APK details:

**Live Endpoint**: [https://code-eidter-apk-website.vercel.app/version.json](https://code-eidter-apk-website.vercel.app/version.json)

```json
{
  "versionCode": 31,
  "versionName": "1.4.4",
  "apkUrl": "https://code-eidter-apk-website.vercel.app/apk/CodeEditor-v1.4.4.apk",
  "websiteUrl": "https://code-eidter-apk-website.vercel.app/",
  "releaseNotes": "CodeEditor IDE v1.4.4 (versionCode 31, Target SDK 34 Compatibility Mode, package com.rajkumar.codereditor): Fixed Kotlin kotlinc line 29 syntax error via bash execution engine, manual website-driven update portal without intrusive popups, and adaptive toolbar auto-sizing across all 14+ languages on Android 10-15.",
  "publishedAt": "2026-10-16"
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
│   ├── CodeEditor-v1.4.0.apk    # Current signed release (target SDK 37, versionCode 27)
│   └── CodeEditor-latest.apk   # Same APK as CodeEditor-v1.4.0.apk
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
