import { SupportedEnvironment } from "../../../types";
import { C_LANGS } from "./languages";

export const getCode = (code: string, env: SupportedEnvironment) => {
  let parts = [];
  code.split(/(\".+?\")/g).forEach((codeBlock, index) => {
    if (index % 2 !== 0) {
      parts.push({ code: codeBlock, color: C_LANGS.common.STRING });
    } else {
      codeBlock.split(/(\'.+?\')/g).forEach((inBlock, secIndex) => {
        if (secIndex % 2 !== 0) {
          parts.push({
            code: inBlock,
            color: C_LANGS.common.STRING,
          });
        } else {
          inBlock.split(" ").forEach((part, piInd) => {
            parts.push({
              code: part,
              color: C_LANGS[env][part],
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
