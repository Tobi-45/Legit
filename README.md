# Legit – Smart Email Scanner 🚀  ( Work In Progress )

**Legit** is a browser extension that automatically scans emails to detect phishing attempts, malicious links, and spoofed senders. It helps users identify threats in real time, providing a safer email experience.  

## ⚡ Features  
- ✅ **Automatic Email Scanning** – Triggers when an email is opened.  
- 🔍 **Real-Time Analysis** – Detects phishing, spoofing, and harmful attachments.  
- 🔔 **Instant Alerts** – Shows temporary pop-ups for safe emails and persistent warnings for malicious ones.  
- 🌐 **Cross-Browser Compatibility** – Works on all major browsers.  
- 🛠 **Raw Email Analysis** – Reads email headers and raw data for advanced threat detection.  

## 📌 Future Enhancements  
- 📊 **Centralized Dashboard** – Monitor alerts from multiple extensions in an enterprise setup.  
- 🤖 **AI/ML Integration** – Smart detection using machine learning for improved accuracy.  
- 🔒 **Enterprise Security Features** – Designed for both personal and corporate use.

## Legit File
This file contains all the code for our Browser extension, you can simply add this as an extension in your browser & use it

## Server File
This file contains the backend server running a (AI)[https://huggingface.co/r3ddkahili/final-complete-malicious-url-model] which tells you whether the email is safe or malicious.

1. Add the legit file to your Browser as an extension
2. Start the backend server
3. And when you open an email it will be checked for any malicious content

## Note

1. The AI is not 100% accurate & I will be fine-tuning it again
2. The actual concept was to host the backend server on the cloud, but due to some problems, I couldn't
