import React from "react";

import {
  BuilderComponent,
  CodeBlock,
  CodeBoxProps,
  MbxUiComponent,
  SupportedEnvironment,
} from "../../../types";

import { parseCode } from "./utils";

import { CopyIcon } from "../../../icons/generic";

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
    <IconButton
      key="cd_cp"
      onClick={() => code && navigator.clipboard.writeText(code)}
      hide={!copyButton}
      disabled={disabled}
      hover={hover}
    >
      {CopyIcon}
    </IconButton>,
    <div key="cd_cd" data-mbx-cls="cd-cd">
      {code.split("\n").map((codeLine, lIndex) => (
        <p data-mbx-scl="myauto" key={`cd_l_${lIndex}`}>
          {parseLine(codeLine, environment).map((cBlock, bIndex) =>
            cBlock.code === " " ? (
              ` `
            ) : (
              <span
                key={`cdb_bl_${bIndex}`}
                {...(cBlock.color && {
                  style: { color: cBlock.color },
                })}
              >
                {cBlock.code}
              </span>
            )
          )}
        </p>
      ))}
    </div>,
  ];
};

export default codeboxComponent;
