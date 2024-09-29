
## Social Deeplink

Generate deep links for popular social media platforms (Facebook, Twitter, Instagram, TikTok, LinkedIn, YouTube) that open directly in the app on mobile devices. If the app is not installed, the links will automatically open in the default browser.

## Features
Supports Facebook, Twitter, Instagram, TikTok, LinkedIn, and YouTube.
Detects the platform (iOS/Android) and generates appropriate deep links.
Automatically falls back to the default web browser if the app is not installed.
Lightweight and easy to use.

## Installation
You can install the package via npm:


Copier le code
```
npm install social-deeplink
```
## Usage
Generate a Deep Link from a URL
You can generate a deep link by passing a URL, and the package will automatically detect the social media platform and create the appropriate link.

Copier le code
```
const { openinapp } = require('openinapp');

const newlink = openinapp('https://www.tiktok.com/@someUser');
console.log(newlink);

window.location.href = newlink;
```

## Supported Platforms
The package supports generating deep links for the following social media platforms:

Facebook
Twitter
Instagram
TikTok
LinkedIn
YouTube
The library will automatically fall back to opening the social media page in the browser if the app is not installed on the user's device.

