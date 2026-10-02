# Code Editor (TermCode IDE) - Official Website & Portal

Official website and download portal for **Code Editor (TermCode IDE)** for Android.

## Features
- **Visual Step-by-Step Setup Guide**: Real app screenshots illustrating project explorer, multi-tab editing, smart coding keyboard, native terminal compiler, and in-app live web preview.
- **Direct 1-Click APK Download**: High-speed direct APK download and cloud mirror.
- **Interactive Lightbox Modal**: Tap any screenshot to zoom in full resolution.
- **15+ Languages Showcase**: C, C++, Rust, Python, Java, Go, Kotlin, Node.js Full-Stack, HTML/CSS Web, TypeScript, C#, PHP, Ruby, Lua.
- **Vercel-Ready**: Pre-configured with `vercel.json` for instant deployment.

## Deploying to Vercel
1. Create a new GitHub repository (e.g. `code-editor-website`).
2. Push this folder to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/code-editor-website.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) -> **Add New Project** -> Import your GitHub repository.
4. Framework Preset: **Other** (Static HTML). Click **Deploy**!

## Updating the APK
When a new APK is built:
1. Replace `apk/CodeEditor-v1.2.0.apk` with the newly built APK.
2. Commit and push:
   ```bash
   git add apk/CodeEditor-v1.2.0.apk
   git commit -m "chore: update APK release build"
   git push
   ```
Vercel will auto-deploy the update within seconds!
