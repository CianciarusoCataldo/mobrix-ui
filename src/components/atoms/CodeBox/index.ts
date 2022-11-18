import "./styles.css";

import { CodeBoxComponent } from "./types";

import { withMobrixUiValue } from "../../../utils";

import components from "./component";

/**
 * A smart code box, to display code text as a compiler. Optionally, can highlight code text, with a selectable environment
 *
 * @since 1.0.0
 *
 * @param {string} value code to display
 * @param {boolean} enhanced enable/disable advanced mode, to access extra features, like the integrated copy button and text highlight
 * @param environment environment for text highlight feature, default to "terminal" (only enabled into enhanced mode)
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
  return withMobrixUiValue<string>({
    name: "mobrix-ui-codebox",
    defaultValue: "",
    inputValue: value,
    props: (code, _) => {
      return {
        Component: components({
          enhanced,
          environment: environment || "terminal",
          value: code,
        }),
        commonProps,
      };
    },
  });
};

export default CodeBox;
