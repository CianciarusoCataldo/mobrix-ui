import { SupportedEnvironment } from "../../../types";
import { C_LANGS, cColor } from "./languages";

export const getCode = (code: string, env: SupportedEnvironment) => {
  let parts = [];
  const strCol = cColor[C_LANGS.common.STRING];
  code.split(/(\".+?\")/g).forEach((codeBlock, index) => {
    if (index % 2 !== 0) {
      parts.push({ code: codeBlock, color: strCol });
    } else {
      codeBlock.split(/(\'.+?\')/g).forEach((inBlock, secIndex) => {
        if (secIndex % 2 !== 0) {
          parts.push({
            code: inBlock,
            color: strCol,
          });
        } else {
          inBlock.split(" ").forEach((part, piInd) => {
            parts.push({
              code: part,
              color: cColor[C_LANGS[env][part]],
            });

            parts.push({
              code: " ",
            });
          });
        }
      });
    }
  });

  if (parts[parts.length - 1].code === " ") {
    parts.pop();
  }

  return parts;
};
