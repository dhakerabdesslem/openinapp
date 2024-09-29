# OPEN IN APP

Generate deep links for social media platforms (Facebook, Twitter, Instagram, TikTok, LinkedIn, YouTube) that open in the app or fallback to the browser.

## Installation

```
npm i openinapp

## Usage
const { generateDeeplinkFromURL } = require('social-deeplink');

// Example for generating TikTok deep link
const tiktokLink = generateDeeplinkFromURL('https://www.tiktok.com/@someUser');
console.log(tiktokLink);

// Redirect to the deep link
window.location.href = tiktokLink;
