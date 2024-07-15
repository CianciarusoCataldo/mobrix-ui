import { SupportedEnvironment } from "../../../types";
import { CODE_LANGUAGES } from "./languages";

export const parseCode = (code: string, environment: SupportedEnvironment) => {
  let parts = [];
  code.split(/(\".+?\")/g).forEach((codeBlock, index) => {
    if (index % 2 !== 0) {
      parts.push({ code: codeBlock, color: CODE_LANGUAGES.common.STRING });
    } else {
      codeBlock.split(/(\'.+?\')/g).forEach((inBlock, secIndex) => {
        if (secIndex % 2 !== 0) {
          parts.push({
            code: inBlock,
            color: CODE_LANGUAGES.common.STRING,
          });
        } else {
          inBlock.split(" ").forEach((part, piInd) => {
            parts.push({
              code: part,
              color: CODE_LANGUAGES[environment][part],
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
