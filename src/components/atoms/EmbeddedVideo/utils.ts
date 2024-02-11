export const parseEmbedUrl = (url?: string) => {
  let embeddedLink;
  let allowedFeatures = "";
  let extraProps = {};
  // Youtube
  if (url.startsWith("https://www.youtube.com/watch?v=")) {
    embeddedLink = url.replace(
      "https://www.youtube.com/watch?v=",
      "https://www.youtube-nocookie.com/embed/",
    );
    extraProps = { frameBorder: "0", allowFullScreen: "" };
    allowedFeatures =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  }

  // Dailymotion
  else if (url.startsWith("https://www.dailymotion.com/video/")) {
    embeddedLink = url.replace(
      "https://www.dailymotion.com/video/",
      "https://www.dailymotion.com/embed/video/",
    );
    extraProps = { frameBorder: "0", allowFullScreen: true };
    allowedFeatures =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  }

  //Facebook Watch
  else if (url.startsWith("https://www.facebook.com/watch/?v=")) {
    embeddedLink = url.replace(
      "https://www.facebook.com/watch/?v=",
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F",
    );
    extraProps = { frameBorder: "0", allowFullScreen: true };
    allowedFeatures =
      "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  }

  return {
    embeddedLink,
    allowedFeatures,
    extraProps,
  };
};
