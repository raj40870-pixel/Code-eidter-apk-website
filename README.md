# CodeEditor IDE - Official Web Portal & Download Hub 🌐
### *The Official Landing Page, Setup Guide, and APK Distribution Platform for CodeEditor IDE on Android*

[![Live on Vercel](https://img.shields.io/badge/Website-Live_on_Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://code-eidter-apk-website.vercel.app/)
[![Latest Release](https://img.shields.io/badge/Latest_Release-v1.3.9_Signed-success?style=for-the-badge&logo=android&logoColor=white)](https://code-eidter-apk-website.vercel.app/apk/CodeEditor-v1.3.9.apk)
[![Android App Repo](https://img.shields.io/badge/Android_App-code--eidter--app-blue?style=for-the-badge&logo=github&logoColor=white)](https://github.com/raj40870-pixel/code-eidter-app)
[![Compiler CDN](https://img.shields.io/badge/Compiler_Library-Official_CDN-purple?style=for-the-badge&logo=gnubash&logoColor=white)](https://github.com/raj40870-pixel/library)
[![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)](LICENSE)

---

## 🌐 Ecosystem Quick Links

- 🔗 **Official Website**: [https://code-eidter-apk-website.vercel.app/](https://code-eidter-apk-website.vercel.app/)
- ⬇️ **Latest Direct APK Download (v1.3.9)**: [Download CodeEditor-v1.3.9.apk](https://code-eidter-apk-website.vercel.app/apk/CodeEditor-v1.3.9.apk) *(Target SDK 37, versionCode 23, signed package `com.rajkumar.codereditor`)*
- 📱 **Official Android App Repository**: [raj40870-pixel/code-eidter-app](https://github.com/raj40870-pixel/code-eidter-app)
- 🗃️ **Compiler Toolchains CDN**: [raj40870-pixel/library](https://github.com/raj40870-pixel/library)

---

## 🌟 Overview

This repository hosts the source code, assets, and deployment configuration for the **CodeEditor IDE (TermCode)** official web portal, deployed live at [**https://code-eidter-apk-website.vercel.app/**](https://code-eidter-apk-website.vercel.app/).

The portal serves APK downloads, visual walkthroughs, and compiler setup guides. The app checks `version.json` only when the user selects **Check Latest Version**; it never downloads or installs an update automatically.

---

## ✨ Portal Features

- **⚡ Direct 1-Click APK Download**: Download the signed v1.3.9 APK (`CodeEditor-v1.3.9.apk`, target SDK 37, versionCode 23, package `com.rajkumar.codereditor`).
- **📦 Manual version check**: The app reads `version.json` only on request, reports the latest and installed versions, and never installs an update.
- **📱 Interactive Visual Setup Guide**: Real app screenshots illustrating project explorer, multi-tab editing, smart coding keyboard, embedded Linux terminal compilation, and live web previews with high-resolution lightbox modal zoom.
- **📄 APK Metadata (`version.json`)**: Records the current download details; the current app uses manual GitHub release verification instead of automatic website updates.
- **🛠️ 15+ Compilers & Language Showcase**: Starter templates and guides for C, C++, Python, Java, Node.js Full-Stack, HTML/CSS Web, TypeScript, Go, Rust, Kotlin, C# Mono, PHP, Ruby, and Lua.
- **🎨 Modern Developer-Focused UI**: Built with pure semantic HTML5, CSS3, and vanilla JavaScript—zero heavy frameworks, lightning-fast first contentful paint (FCP), and full mobile responsiveness.
- **☁️ Continuous Vercel Deployment**: Configured with `vercel.json` for instantaneous atomic deployments upon Git push.

---

## 📄 Published APK Metadata (`version.json`)

This file records the current direct-download APK details. The Android app requests this endpoint only when the user manually checks for the latest version.

**Live Endpoint**: [https://code-eidter-apk-website.vercel.app/version.json](https://code-eidter-apk-website.vercel.app/version.json)

```json
{
  "versionCode": 23,
  "versionName": "1.3.9",
  "apkUrl": "https://code-eidter-apk-website.vercel.app/apk/CodeEditor-v1.3.9.apk",
  "websiteUrl": "https://code-eidter-apk-website.vercel.app/",
  "releaseNotes": "CodeEditor IDE v1.3.9 (versionCode 23, target SDK 37, package com.rajkumar.codereditor): improves compiler library install verification and adds a manual website latest-version check. No automatic update or install.",
  "publishedAt": "2026-10-13"
}
```

The manual version check displays the website version and installed version; it does not download or install APKs.

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
│   ├── CodeEditor-v1.3.9.apk    # Current signed release (target SDK 37, versionCode 23)
│   └── CodeEditor-latest.apk   # Same APK as CodeEditor-v1.3.9.apk
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
