# DuoLines — Interlinear Dual Language Translator for Web Pages 🌐

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)](#)

**DuoLines** is a powerful, lightweight browser extension designed for language learners, readers, and translators. It instantly converts standard web articles into an **interlinear bilingual format**, displaying your target language directly beneath the original text.

🔗 **Official Website & Privacy Policy:** [https://duolines-pro.github.io](https://duolines-pro.github.io)

---

## ✨ Key Features
* **Universal Web Compatibility:** Works on almost any text-based HTML5 website (News, Blogs, Wikipedia).
* **Interlinear Layout:** Perfectly aligns translated text line-by-line or sentence-by-sentence with the original text.
* **Privacy First:** Text processing is handled securely. We do not store your reading history or personal data.
* **Customizable UI:** Adjust font size, interlinear spacing, and text colors to ensure a perfect reading experience.
* **Manifest V3:** Built using the latest extension standards for better security and performance.

## 🛠 Installation

### 🚀 Installation

#### Option 1: Chrome Web Store (Recommended)
You can install **DuoLines** directly from the official store for automatic updates:

[![Available in the Chrome Web Store](https://img.shields.io/badge/Chrome_Web_Store-DuoLines-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](#) *(Link coming soon)*

#### Option 2: Manual Installation (Developer Mode)
1. Download the [latest release ZIP](#).
2. Unpack the archive on your computer.
3. Open Chrome and go to `chrome://extensions/`.
4. Enable **Developer mode** (toggle in the top right).
5. Click **Load unpacked** and select the extension folder.
   
## 🚀 Technical Implementation
The extension uses a **DOM Parser** and **MutationObserver** to isolate text nodes on web pages. Once detected, it creates a non-intrusive CSS overlay or inline flexbox layout where the translated text is injected directly below the original line using **Vanilla JavaScript**. This ensures a smooth reading experience without breaking the original site's layout.

## 📄 License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---
*Created by [DuoLines](https://github.com/duolines-pro)*
