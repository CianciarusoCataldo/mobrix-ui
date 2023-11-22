import React from "react";

import {
  BuilderComponent,
  CodeBoxProps,
  MoBrixUiComponent,
} from "../../../types";

import { parseCode } from "./parser";

import { CopyIcon } from "./icons";
import Button from "../Button";

const codeboxComponent: MoBrixUiComponent<CodeBoxProps, BuilderComponent[]> = ({
  value: code,
  highlight,
  environment = "terminal",
  noCopyButton,
}) => [
    <div key="codebox_copy_icon" data-mobrix-ui-class="codebox-copy-icon">
      <Button
        unstyled
        onClick={() => code && navigator.clipboard.writeText(code)}
        hide={noCopyButton}
      >
        {CopyIcon}
      </Button>
    </div>,
    <code key="codebox_code" data-mobrix-ui-class="codebox-code">
      {code &&
        (highlight ? parseCode(code, environment).map((part, index) => (
          <span
            key={`code-block_${environment}_${index}`}
            style={{
              color: /* istanbul ignore next */ part.color || "",
            }}
          >{`${part.code}`}</span>
        )) : code)}
    </code>,
  ];

export default codeboxComponent;
