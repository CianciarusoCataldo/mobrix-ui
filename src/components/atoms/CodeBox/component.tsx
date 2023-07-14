import React from "react";

import {
  BuilderComponent,
  CodeBoxProps,
  MoBrixUiComponent,
} from "mobrix-ui-types";

import { parseCode } from "./parser";

import { CopyIcon } from "./icons";
import Button from "../Button";

const codeboxComponent: MoBrixUiComponent<CodeBoxProps, BuilderComponent[]> = ({
  value: code,
  enhanced,
  environment = "terminal",
}) => [
  <div
    key="codebox_copy_icon"
    className={`codebox-copy-icon ${!enhanced ? "component-hidden" : ""}`}
  >
    <Button
      unstyled
      onClick={() => code && navigator.clipboard.writeText(code)}
    >
      {CopyIcon}
    </Button>
  </div>,
  <code key="codebox_code" className="codebox-code">
    {enhanced && code
      ? parseCode(code, environment).map((part, index) => (
          <span
            key={`code-block_${environment}_${index}`}
            style={{
              color: /* istanbul ignore next */ part.color || "",
            }}
          >{`${part.code}`}</span>
        ))
      : code}
  </code>,
];

export default codeboxComponent;
