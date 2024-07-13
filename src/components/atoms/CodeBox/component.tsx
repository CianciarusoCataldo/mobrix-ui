import React from "react";

import {
  BuilderComponent,
  CodeBlock,
  CodeBoxProps,
  MbxUiComponent,
  SupportedEnvironment,
} from "../../../types";

import { parseCode } from "./utils";

import { CopyIcon } from "./icons";

import IconButton from "../IconButton";

const codeboxComponent: MbxUiComponent<CodeBoxProps, BuilderComponent[]> = ({
  disabled,
  hover,
  value: code = "",
  highlight = true,
  environment = "terminal",
  copyButton = true,
}) => {
  let parseLine: (
    inputCode: string,
    environment: SupportedEnvironment
  ) => CodeBlock[] =
    highlight && code.length > 0
      ? parseCode
      : (inputCode, environment) => [{ code: inputCode }];

  return [
    <div key="cd_cp" data-mbx-scl="flxc" data-mbx-cls="cd-cp">
      <IconButton
        onClick={() => code && navigator.clipboard.writeText(code)}
        hide={!copyButton}
        disabled={disabled}
        hover={hover}
      >
        {CopyIcon}
      </IconButton>
    </div>,
    <div key="cd_cd" data-mbx-cls="cd-cd">
      {code.split("\n").map((codeLine, lineIndex) => (
        <p data-mbx-cls="cd-cb" key={`cd_l_${lineIndex}`}>
          {parseLine(codeLine, environment).map((codeBlock, blockIndex) =>
            codeBlock.code === " " ? (
              ` `
            ) : (
              <span
                key={`cdb_bl_${blockIndex}`}
                {...(codeBlock.color && {
                  style: { color: codeBlock.color },
                })}
              >
                {codeBlock.code}
              </span>
            )
          )}
        </p>
      ))}
    </div>,
  ];
};

export default codeboxComponent;
