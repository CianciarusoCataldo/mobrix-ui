import "./styles.css";

import React from "react";

import { CodeBoxComponent } from "./types";

import { buildBoxComponent } from "../../../utils";
import { parseCode } from "./parser";

import Button from "../Button";

/**
 * A smart code box, to display code text as a compiler. Optionally, can highlight code text, with a selectable environment
 *
 * @since 1.0.0
 *
 * @param {string} value code to display
 * @param {boolean} enhanced enable/disable advanced mode, to access extra features, like the integrated copy button and text highlight
 * @param environment environment for text highlight feature, default to "terminal" (only enabled into enhanced mode)
 * @param {string} label `common MoBrix-ui prop` - component top label
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
  label,
  ...commonProps
}) =>
  buildBoxComponent<string>({
    defaultValue: "",
    value,
    label,
    callBack: (code, _) => {
      const selectedLanguage = environment || "terminal";

      return {
        name: "mobrix-ui-codebox",
        Component: (
          <div>
            {enhanced && (
              <div key="key_icon" className="copy-icon">
                <Button
                  unstyled
                  onClick={() => navigator.clipboard.writeText(code)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 60 60"
                    width="25px"
                    height="25px"
                    version="1.0"
                  >
                    <rect
                      strokeLinejoin="round"
                      fillRule="evenodd"
                      stroke="#4c4c4c"
                      strokeWidth="3.125"
                      fill="#ccc"
                      rx="2.4745"
                      height="36.513"
                      width="34.732"
                      y="4.5767"
                      x="5.0385"
                    />
                    <rect
                      strokeLinejoin="round"
                      fillRule="evenodd"
                      stroke="#4c4c4c"
                      strokeWidth="3.125"
                      fill="#b3b3b3"
                      rx="2.4745"
                      height="36.513"
                      width="34.732"
                      y="20.161"
                      x="20.178"
                    />
                    <path
                      strokeLinejoin="round"
                      fillRule="evenodd"
                      stroke="#333"
                      strokeLinecap="round"
                      strokeWidth="3.125"
                      fill="#7f7f7f"
                      d="M10.971 22.475C19.445 41.064 33.797 36.69 33.934 36.69v-6.15l8.269 9.459-8.338 8.788v-6.219s-19.887 4.647-22.894-20.093z"
                    />
                  </svg>
                </Button>
              </div>
            )}
            <code key="code" className="code">
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
            </code>
          </div>
        ),
        commonProps,
      };
    },
  });

export default CodeBox;
