const capitalize = (inp: string) =>
  inp.replace(/\b\w/g, (l) => l.toUpperCase());

const cssC = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
} as const;

export const getMargins = (pos: string) =>
  Object.keys(cssC).includes(pos) && {
    [`margin${capitalize(pos)}`]: 0,
    [`margin${capitalize(cssC[pos])}`]: "0.7rem",
  };
