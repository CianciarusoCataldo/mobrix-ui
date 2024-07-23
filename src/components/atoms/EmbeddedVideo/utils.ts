const vdSource = [
  /** Youtube */
  {
    filter: "https://www.youtube.com/watch?v=",
    eProps: { frameBorder: "0", allowFullScreen: "" },
    features:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    parse: (url: string) =>
      url.replace(
        "https://www.youtube.com/watch?v=",
        "https://www.youtube-nocookie.com/embed/",
      ),
  },
  /** DailyMotion */
  {
    filter: "https://www.dailymotion.com/video/",
    eProps: { frameBorder: "0", allowFullScreen: true },
    features:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    parse: (url: string) =>
      url.replace(
        "https://www.dailymotion.com/video/",
        "https://www.dailymotion.com/embed/video/",
      ),
  },
  /** Facebook Watch */
  {
    filter: "https://www.facebook.com/watch/?v=",
    eProps: { frameBorder: "0", allowFullScreen: true },
    features:
      "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    parse: (url: string) =>
      url.replace(
        "https://www.facebook.com/watch/?v=",
        "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F",
      ),
  },
];

export const parseUrl: (url: string) => {
  eProps?: Record<string, any>;
  link?: string;
  features?: string;
} = (url) => {
  const res = vdSource.find((el) => url.startsWith(el.filter));

  return res ? { ...res, link: res.parse(url) } : {};
};
