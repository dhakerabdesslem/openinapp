# OPEN IN APP

Generate deep links for social media platforms (Facebook, Twitter, Instagram, TikTok, LinkedIn, YouTube) that open in the app or fallback to the browser.

## Installation

```
npm i openinapp
```

## Usage

```
const { openinapp } = require('openinapp');

const newlink = openinapp('https://www.tiktok.com/@someUser');
console.log(newlink);

window.location.href = newlink;
```
Social Deeplink
Generate deep links for popular social media platforms (Facebook, Twitter, Instagram, TikTok, LinkedIn, YouTube) that open directly in the app on mobile devices. If the app is not installed, the links will automatically open in the default browser.

Features
Supports Facebook, Twitter, Instagram, TikTok, LinkedIn, and YouTube.
Detects the platform (iOS/Android) and generates appropriate deep links.
Automatically falls back to the default web browser if the app is not installed.
Lightweight and easy to use.
Installation
You can install the package via npm:

bash
Copier le code
npm install social-deeplink
Usage
Generate a Deep Link from a URL
You can generate a deep link by passing a URL, and the package will automatically detect the social media platform and create the appropriate link.

javascript
Copier le code
const { generateDeeplinkFromURL } = require('social-deeplink');

// Example for generating a TikTok deep link
const tiktokLink = generateDeeplinkFromURL('https://www.tiktok.com/@someUser');
console.log(tiktokLink); // Outputs the deep link based on the platform

// Redirect to the generated link
window.location.href = tiktokLink;
Supported Platforms
The package supports generating deep links for the following social media platforms:

Facebook
Twitter
Instagram
TikTok
LinkedIn
YouTube
The library will automatically fall back to opening the social media page in the browser if the app is not installed on the user's device.

Example Deep Link for Facebook:
javascript
Copier le code
const facebookLink = generateDeeplinkFromURL('https://www.facebook.com/someProfile');
console.log(facebookLink); // fb://facewebmodal/f?href=...
Example Deep Link for Instagram:
javascript
Copier le code
const instagramLink = generateDeeplinkFromURL('https://www.instagram.com/someUser');
console.log(instagramLink); // instagram://user?username=someUser
API
generateDeeplinkFromURL(url)
url: The social media URL you want to convert into a deep link.
Returns a deep link for the platform detected from the URL. If the platform is not recognized, it will return the original URL.

Example:
javascript
Copier le code
const link = generateDeeplinkFromURL('https://www.tiktok.com/@someUser');
console.log(link); // Outputs the deep link for TikTok
License
This project is licensed under the MIT License.
