function openinapp(url) {
  const socialMediaLinks = {
      facebook: {
          android: "fb://facewebmodal/f?href=",
          ios: "fb://profile/",
          default: "https://www.facebook.com/",
      },
      twitter: {
          android: "twitter://user?screen_name=",
          ios: "twitter://user?screen_name=",
          default: "https://www.twitter.com/",
      },
      instagram: {
          android: "instagram://user?username=",
          ios: "instagram://user?username=",
          default: "https://www.instagram.com/",
      },
  };

  let platform = "default";
  let username = extractUsername(url);
  
  if (url.includes("facebook.com")) {
      platform = "facebook";
  } else if (url.includes("twitter.com")) {
      platform = "twitter";
  } else if (url.includes("instagram.com")) {
      platform = "instagram";
  }

  const deepLinkData = {
      android: socialMediaLinks[platform].android + username,
      ios: socialMediaLinks[platform].ios + username,
      default: socialMediaLinks[platform].default + username
  };

  return deepLinkData;
}

function extractUsername(url) {
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 1] || '';
}

module.exports = openinapp;
