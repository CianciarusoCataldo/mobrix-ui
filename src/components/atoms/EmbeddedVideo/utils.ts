const SUPPORTED_VIDEO_PLATFORMS = [
  /** Youtube */
  {
    startsWith: "https://www.youtube.com/watch?v=",
    extraProps: { frameBorder: "0", allowFullScreen: "" },
    allowedFeatures:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    parse: (url: string) =>
      url.replace(
        "https://www.youtube.com/watch?v=",
        "https://www.youtube-nocookie.com/embed/",
      ),
  },
  /** DailyMotion */
  {
    startsWith: "https://www.dailymotion.com/video/",
    extraProps: { frameBorder: "0", allowFullScreen: true },
    allowedFeatures:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    parse: (url: string) =>
      url.replace(
        "https://www.dailymotion.com/video/",
        "https://www.dailymotion.com/embed/video/",
      ),
  },
  /** Facebook Watch */
  {
    startsWith: "https://www.facebook.com/watch/?v=",
    extraProps: { frameBorder: "0", allowFullScreen: true },
    allowedFeatures:
      "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    parse: (url: string) =>
      url.replace(
        "https://www.facebook.com/watch/?v=",
        "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F",
      ),
  },
];

export const parseEmbedUrl: (url: string) => {
  extraProps?: Record<string, any>;
  embeddedLink?: string;
  allowedFeatures?: string;
} = (url) => {
  const platform = SUPPORTED_VIDEO_PLATFORMS.find((el) =>
    url.startsWith(el.startsWith),
  );

  return { ...platform, embeddedLink: platform?.parse(url) };
};
