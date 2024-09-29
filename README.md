# OPEN IN APP

Generate deep links for social media platforms (Facebook, Twitter, Instagram, TikTok, LinkedIn, YouTube) that open in the app or fallback to the browser.

## Installation

```
npm i openinapp
```

## Usage

```
const { openinapp } = require('openinapp');

const tiktokLink = openinapp('https://www.tiktok.com/@someUser');
console.log(tiktokLink);

window.location.href = tiktokLink;
