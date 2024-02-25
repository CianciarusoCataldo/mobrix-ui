import React from "react";

import {
  BuilderComponent,
  CodeBlock,
  CodeBoxProps,
  MoBrixUiComponent,
  SupportedEnvironment,
} from "../../../types";

import { parseCode } from "./utils";

import { CopyIcon } from "./icons";

import IconButton from "../IconButton";

const codeboxComponent: MoBrixUiComponent<CodeBoxProps, BuilderComponent[]> = ({
  disabled,
  hover,
  value: code = "",
  highlight = true,
  environment = "terminal",
  copyButton = true,
}) => {
  let parseCodeLineFunction: (
    inputCode: string,
    environment: SupportedEnvironment,
  ) => CodeBlock[] =
    highlight && code.length > 0
      ? parseCode
      : (inputCode, environment) => [{ code: inputCode }];

  return [
    <div key="codebox_copy_icon" data-mbx-class="codebox-copy-icon">
      <IconButton
        onClick={() => code && navigator.clipboard.writeText(code)}
        hide={!copyButton}
        disabled={disabled}
        additionalProps={{
          "data-mbx-opacityhover": hover && !disabled,
        }}
      >
        {CopyIcon}
      </IconButton>
    </div>,
    <div key="codebox_code" data-mbx-class="codebox-code">
      {code.split("\n").map((codeLine, lineIndex) => (
        <p data-mbx-class="codeline" key={`codeline_${lineIndex}`}>
          {parseCodeLineFunction(codeLine, environment).map(
            (codeBlock, blockIndex) =>
              codeBlock.code === " " ? (
                ` `
              ) : (
                <span
                  key={`codeblock_${blockIndex}`}
                  {...(codeBlock.color && {
                    style: { color: codeBlock.color },
                  })}
                >
                  {codeBlock.code}
                </span>
              ),
          )}
        </p>
      ))}
    </div>,
  ];
};

export default codeboxComponent;
