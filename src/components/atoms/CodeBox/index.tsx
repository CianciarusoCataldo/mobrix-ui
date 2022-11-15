import "./styles.css";

import React from "react";

import { CodeBoxComponent } from "./types";

import { withMobrixUiValue } from "../../../utils";
import { parseCode } from "./parser";

import Button from "../Button";
import { CopyIcon } from "./icons";

/**
 * A smart code box, to display code text as a compiler. Optionally, can highlight code text, with a selectable environment
 *
 * @since 1.0.0
 *
 * @param {string} value code to display
 * @param {boolean} enhanced enable/disable advanced mode, to access extra features, like the integrated copy button and text highlight
 * @param environment environment for text highlight feature, default to "terminal" (only enabled into enhanced mode)
 * @param {JSX.Element | string} label `common MoBrix-ui prop` - Component top label
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example CodeBox usage</caption>
 * import { render } from "react-dom";
 * import { CodeBox } from 'mobrix-ui';
 *
 * render(<CodeBox value="node version" />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CodeBox
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const CodeBox: CodeBoxComponent = ({
  value,
  enhanced,
  environment,
  ...commonProps
}) => {
  const selectedLanguage = environment || "terminal";

  return withMobrixUiValue<string>({
    name: "mobrix-ui-codebox",
    defaultValue: "",
    inputValue: value,
    props: (code, _) => {
      return {
        Component: [
          <div
            key="codebox_copy_icon"
            className={`codebox-copy-icon ${
              !enhanced ? "component-hidden" : ""
            }`}
          >
            <Button
              unstyled
              onClick={() => navigator.clipboard.writeText(code)}
            >
              {CopyIcon}
            </Button>
          </div>,
          <code key="codebox_code" className="codebox-code">
            {enhanced
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
        ],
        commonProps,
      };
    },
  });
};

export default CodeBox;
