import React from "react";

import {
  BuilderComponent,
  CodeBoxProps,
  MoBrixUiComponent,
} from "../../../types";

import { parseCode } from "./parser";

import { CopyIcon } from "./icons";

import IconButton from "../IconButton";

const codeboxComponent: MoBrixUiComponent<CodeBoxProps, BuilderComponent[]> = ({
  value: code,
  highlight,
  environment = "terminal",
  noCopyButton,
  disabled,
  hover,
}) => [
  <div key="codebox_copy_icon" data-mbx-class="codebox-copy-icon">
    <IconButton
      onClick={() => code && navigator.clipboard.writeText(code)}
      hide={noCopyButton}
      disabled={disabled}
      additionalProps={{
        "data-mbx-opacityhover": hover && !disabled,
      }}
    >
      {CopyIcon}
    </IconButton>
  </div>,
  <code key="codebox_code" data-mbx-class="codebox-code">
    {code &&
      (highlight
        ? parseCode(code, environment).map((part, index) => (
            <span
              key={`code-block_${environment}_${index}`}
              style={{
                color: /* istanbul ignore next */ part.color || "",
              }}
            >{`${part.code}`}</span>
          ))
        : code)}
  </code>,
];

export default codeboxComponent;
