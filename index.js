const { detect } = require('detect-browser');
const browser = detect();

// Define deep link patterns for each social media platform, including TikTok
const deepLinkPatterns = {
  facebook: {
    ios: 'fb://facewebmodal/f?href=',
    android: 'fb://facewebmodal/f?href=',
    default: 'https://www.facebook.com/',
  },
  twitter: {
    ios: 'twitter://timeline?url=',
    android: 'twitter://timeline?url=',
    default: 'https://twitter.com/',
  },
  instagram: {
    ios: 'instagram://user?username=',
    android: 'intent://www.instagram.com/#Intent;package=com.instagram.android;scheme=https;end',
    default: 'https://www.instagram.com/',
  },
  linkedin: {
    ios: 'linkedin://profile/',
    android: 'linkedin://profile/',
    default: 'https://www.linkedin.com/',
  },
  youtube: {
    ios: 'youtube://www.youtube.com/watch?v=',
    android: 'vnd.youtube://www.youtube.com/watch?v=',
    default: 'https://www.youtube.com/watch?v=',
  },
  tiktok: {
    ios: 'snssdk1128://user/profile/',
    android: 'snssdk1128://user/profile/',
    default: 'https://www.tiktok.com/@',
  }
};

/**
 * Detect the platform from the provided URL.
 * @param {string} url - The URL of the social media profile or post.
 * @returns {string|null} - The detected platform (e.g., 'facebook', 'twitter') or null if not found.
 */
function detectPlatformFromURL(url) {
  const platformPatterns = {
    facebook: /(?:www\.)?facebook\.com/,
    twitter: /(?:www\.)?twitter\.com/,
    instagram: /(?:www\.)?instagram\.com/,
    linkedin: /(?:www\.)?linkedin\.com/,
    youtube: /(?:www\.)?youtube\.com/,
    tiktok: /(?:www\.)?tiktok\.com/,
    // Add more patterns if needed
  };

  for (const platform in platformPatterns) {
    if (platformPatterns[platform].test(url)) {
      return platform;
    }
  }

  return null; // Return null if no platform is matched
}

/**
 * Generate a deep link for a given URL by detecting the social media platform.
 * @param {string} url - The URL to open.
 * @returns {string} - The generated deep link or the original URL if platform is not recognized.
 */
function generateDeeplinkFromURL(url) {
  const platform = detectPlatformFromURL(url);

  if (!platform) {
    // If platform is not detected, return the original URL
    return url;
  }

  return generateDeeplink(platform, url);
}

/**
 * Generate a deep link for a given platform and URL.
 * @param {string} platform - The social media platform (e.g., 'facebook', 'twitter', 'instagram').
 * @param {string} url - The URL to open (for fallback to the browser if the app is not installed).
 * @returns {string} - The generated deep link.
 */
function generateDeeplink(platform, url) {
  let deeplink;

  // Detect the platform and create the deep link accordingly
  switch (browser?.os) {
    case 'iOS':
      deeplink = deepLinkPatterns[platform]?.ios + encodeURIComponent(url);
      break;
    case 'Android OS':
      deeplink = deepLinkPatterns[platform]?.android + encodeURIComponent(url);
      break;
    default:
      deeplink = deepLinkPatterns[platform]?.default + encodeURIComponent(url);
  }

  return deeplink;
}

module.exports = { generateDeeplinkFromURL };
