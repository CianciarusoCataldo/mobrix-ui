import { SupportedEnvironment } from "../../../types";
import { CODE_LANGUAGES } from "./languages";

export const parseCode = (code: string, environment: SupportedEnvironment) => {
  let codeParts = [];
  code.split(/(\".+?\")/g).forEach((codeBlock, index) => {
    if (index % 2 !== 0) {
      codeParts.push({ code: codeBlock, color: CODE_LANGUAGES.common.STRING });
    } else {
      codeBlock.split(/(\'.+?\')/g).forEach((codeInternalBlock, secIndex) => {
        if (secIndex % 2 !== 0) {
          console.log(codeInternalBlock, secIndex);

          codeParts.push({
            code: codeInternalBlock,
            color: CODE_LANGUAGES.common.STRING,
          });
        } else {
          codeInternalBlock.split(" ").forEach((codePart, partIndex) => {
            codeParts.push({
              code: codePart,
              color: CODE_LANGUAGES[environment][codePart],
            });

            codeParts.push({
              code: " ",
            });
          });
        }
      });
    }
  });

  if (codeParts[codeParts.length - 1].code === " ") {
    codeParts.pop();
  }

  return codeParts;
};
