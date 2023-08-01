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
  highlight,
  environment = "terminal",
  noCopyButton,
}) => [
  <div key="codebox_copy_icon" className="codebox-copy-icon">
    <Button
      unstyled
      onClick={() => code && navigator.clipboard.writeText(code)}
      hide={noCopyButton}
    >
      {CopyIcon}
    </Button>
  </div>,
  <code key="codebox_code" className="codebox-code">
    {code &&
      parseCode(code, environment).map((part, index) => (
        <span
          key={`code-block_${environment}_${index}`}
          style={{
            color: /* istanbul ignore next */ part.color || "",
          }}
        >{`${part.code}`}</span>
      ))}
  </code>,
];

export default codeboxComponent;
