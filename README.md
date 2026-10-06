# CodeEditor IDE - Official Web Portal & Download Hub 🌐
### *The Official Landing Page, Setup Guide, and APK Distribution Platform for CodeEditor IDE on Android*

[![Live on Vercel](https://img.shields.io/badge/Website-Live_on_Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://code-eidter-apk-website.vercel.app/)
[![Latest Release](https://img.shields.io/badge/Latest_Release-v1.3.5_Signed-success?style=for-the-badge&logo=android&logoColor=white)](https://code-eidter-apk-website.vercel.app/apk/CodeEditor-v1.3.5.apk)
[![Android App Repo](https://img.shields.io/badge/Android_App-code--eidter--app-blue?style=for-the-badge&logo=github&logoColor=white)](https://github.com/raj40870-pixel/code-eidter-app)
[![Compiler CDN](https://img.shields.io/badge/Compiler_Library-Official_CDN-purple?style=for-the-badge&logo=gnubash&logoColor=white)](https://github.com/raj40870-pixel/library)
[![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)](LICENSE)

---

## 🌐 Ecosystem Quick Links

- 🔗 **Official Website**: [https://code-eidter-apk-website.vercel.app/](https://code-eidter-apk-website.vercel.app/)
- ⬇️ **Direct APK Download (v1.3.5)**: [Download CodeEditor-v1.3.5.apk](https://code-eidter-apk-website.vercel.app/apk/CodeEditor-v1.3.5.apk) *(3.38 MB, Clean Signed Build)*
- 📱 **Official Android App Repository**: [raj40870-pixel/code-eidter-app](https://github.com/raj40870-pixel/code-eidter-app)
- 🗃️ **Compiler Toolchains CDN**: [raj40870-pixel/library](https://github.com/raj40870-pixel/library)

---

## 🌟 Overview

This repository hosts the source code, assets, and deployment configuration for the **CodeEditor IDE (TermCode)** official web portal, deployed live at [**https://code-eidter-apk-website.vercel.app/**](https://code-eidter-apk-website.vercel.app/).

The portal serves as the primary distribution hub for the mobile IDE app, providing fast direct APK downloads, comprehensive visual walkthroughs, compiler toolchain setup guides, and the backend **OTA update verification API (`version.json`)** consumed by the Android app.

---

## ✨ Portal Features

- **⚡ Direct 1-Click APK Download**: High-speed CDN direct download of verified, signed APKs (`CodeEditor-v1.3.5.apk`) with SHA-256 integrity hashes and cloud mirror fallbacks.
- **📱 Interactive Visual Setup Guide**: Real app screenshots illustrating project explorer, multi-tab editing, smart coding keyboard, embedded Linux terminal compilation, and live web previews with high-resolution lightbox modal zoom.
- **🔄 Live In-App Update Engine (`version.json`)**: Hosts the real-time version check API that powers CodeEditor IDE's in-app auto-update system.
- **🛠️ 15+ Compilers & Language Showcase**: Starter templates and guides for C, C++, Python, Java, Node.js Full-Stack, HTML/CSS Web, TypeScript, Go, Rust, Kotlin, C# Mono, PHP, Ruby, and Lua.
- **🎨 Modern Developer-Focused UI**: Built with pure semantic HTML5, CSS3, and vanilla JavaScript—zero heavy frameworks, lightning-fast first contentful paint (FCP), and full mobile responsiveness.
- **☁️ Continuous Vercel Deployment**: Configured with `vercel.json` for instantaneous atomic deployments upon Git push.

---

## 🔄 In-App Auto-Update API (`version.json`)

The Android application (`AppUpdateManager.java`) polls the website's `version.json` endpoint to determine if a newer version of the IDE is available.

**Live Endpoint**: [https://code-eidter-apk-website.vercel.app/version.json](https://code-eidter-apk-website.vercel.app/version.json)

```json
{
  "versionCode": 10,
  "versionName": "1.3.5",
  "apkUrl": "https://code-eidter-apk-website.vercel.app/apk/CodeEditor-v1.3.5.apk",
  "websiteUrl": "https://code-eidter-apk-website.vercel.app/",
  "releaseNotes": "v1.3.5 Release: ⌨️ Complete 39-Key Accessory Symbol Bar (smooth horizontal scrolling) | ☕ Smart Java Case Auto-Correction & Anti-Capitalization Engine (auto-fixes Public ➔ public, system ➔ System, string ➔ String) | ⚙️ Java Case Auto-Fix toggle in Editor Settings.",
  "publishedAt": "2026-10-06"
}
```

### Update Flow:
1. When the user taps **Check for Updates** in the IDE's menu, the app fetches `version.json`.
2. If `remote.versionCode > local.versionCode`, an update dialog displays the release notes.
3. Tapping **Update Now** downloads `apkUrl` with a live **0%–100% progress dialog** and prompts immediate installation.

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
│   ├── CodeEditor-v1.3.4.apk    # Current official signed release APK (3.23 MB)
│   └── CodeEditor-latest.apk   # Latest auto-sync release APK (3.23 MB)
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
