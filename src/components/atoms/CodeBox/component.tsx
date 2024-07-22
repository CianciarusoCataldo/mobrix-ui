import React from "react";

import {
  BuilderComponent,
  CodeBlock,
  CodeBoxProps,
  MbxUiComponent,
  SupportedEnvironment,
} from "../../../types";

import { getCode } from "./utils";

import { CopyIcon } from "../../../icons/generic";

import IconButton from "../IconButton";

const cdbComponent: MbxUiComponent<CodeBoxProps, BuilderComponent[]> = ({
  value = "",
  environment = "terminal",
  copyButton = true,
  disabled,
  hover,
  active,
}) => {
  const parse: (inp: string, env: SupportedEnvironment) => CodeBlock[] =
    value.length > 0 ? getCode : (inp, e) => [{ value: inp }];

  return [
    <IconButton
      key="cd_cp"
      onClick={() => value && navigator.clipboard.writeText(value)}
      hide={!copyButton}
      disabled={disabled}
      hover={hover}
      active={active}
    >
      <CopyIcon />
    </IconButton>,
    <div key="cd_cd">
      {value.split("\n").map((codl, lIndex) => (
        <p style={{ margin: 0 }} key={`cd_l_${lIndex}`}>
          {parse(codl, environment).map((cBlock, bIndex) =>
            cBlock.code === " " ? (
              ` `
            ) : (
              <span
                key={`cdb_bl_${bIndex}`}
                style={{ color: cBlock.color || "inherit" }}
              >
                {cBlock.code}
              </span>
            ),
          )}
        </p>
      ))}
    </div>,
  ];
};

export default cdbComponent;
