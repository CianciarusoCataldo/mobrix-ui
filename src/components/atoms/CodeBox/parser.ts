import { CodeBlock, SupportedEnvironment } from "mobrix-ui-types";

import { CODE_LANGUAGES } from "./languages";

/** Basic code parsers */
const BASIC_PARSER = (
  code: string,
  handleOtherElements: ((code: string) => CodeBlock[]) | null
) => {
  const parsedCode: { code: string; color: string | null }[] = [];
  code.split(/(\'.+?\')/g).forEach((codeBlock, codeIndex) => {
    if (codeIndex % 2 !== 0) {
      parsedCode.push({
        code: codeBlock,
        color: CODE_LANGUAGES.common.STRING,
      });
    } else {
      codeBlock.split(/(\".+?\")/g).forEach((codeMicroPart, index) => {
        if (index % 2 !== 0) {
          parsedCode.push({
            code: codeMicroPart,
            color: CODE_LANGUAGES.common.STRING,
          });
        } else {
          /* istanbul ignore next */
          if (handleOtherElements) {
            handleOtherElements(codeMicroPart).forEach((element) =>
              parsedCode.push(element)
            );
          } else {
            parsedCode.push({
              code: codeMicroPart,
              color: null,
            });
          }
        }
      });
    }
  });

  return parsedCode;
};

const PARSERS: Record<
  SupportedEnvironment,
  ((code: string) => CodeBlock[]) | null
> = {
  javascript: null,
  common: null,
  python: null,
  terminal: null,
};

const getHighlightedCode = (
  code: CodeBlock[],
  environment: SupportedEnvironment
) => {
  let actualEnv = environment;
  let splittedCode: CodeBlock[] = [];
  code
    .filter((part) => part.code.length > 0)
    .forEach((codeBlock) => {
      if (!codeBlock.color) {
        codeBlock.code.split(" ").forEach((subCodeBlock) => {
          splittedCode.push({
            color:
              CODE_LANGUAGES[actualEnv][subCodeBlock] ||
              CODE_LANGUAGES.common[subCodeBlock] ||
              CODE_LANGUAGES.common.DEFAULT_VALUE,
            code: `${subCodeBlock} `,
          });
        });
      } else {
        splittedCode.push(codeBlock);
      }
    });
  return splittedCode;
};

/** Parse the given code, and return it splitted into multiple code blocks, with specific highlight color for each block
 *
 * @param code code to parse
 * @param environment selected environment, the highlight colors are based on it (default to `terminal`)
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export const parseCode = (code: string, environment: SupportedEnvironment) => {
  return getHighlightedCode(
    BASIC_PARSER(code, PARSERS[environment]),
    environment
  );
};
