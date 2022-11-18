import React from "react";
import { BuilderComponent } from "../../../utils/global";
import Button from "../Button";
import { CopyIcon } from "./icons";
import { parseCode } from "./parser";
import { CodeBoxProps } from "./types";

const components: (
  props: CodeBoxProps
) => BuilderComponent | BuilderComponent[] = ({
  value: code,
  enhanced,
  environment: selectedLanguage = "terminal",
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
      ? parseCode(code, selectedLanguage).map((part, index) => (
          <span
            key={`code-block_${selectedLanguage}_${index}`}
            style={{
              color: /* istanbul ignore next */ part.color || "",
            }}
          >{`${part.code}`}</span>
        ))
      : code}
  </code>,
];

export default components;
