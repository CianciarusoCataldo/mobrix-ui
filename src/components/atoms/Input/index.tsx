import "./styles.css";

import { InputComponent } from "./types";

import { withMobrixUiValue } from "../../../utils";

/**
 * A flexible text input element
 *
 * @since 1.0.0
 *
 * @param {string} value text input value
 * @param {(newValue:string)=>void} onChange callback triggered when numeric input changes
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Input usage</caption>
 * import { render } from "react-dom";
 * import { Input } from 'mobrix-ui';
 *
 * render(<Input value="example text" />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Input
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Input: InputComponent = ({
  onChange = () => {},
  value,
  placeholder,
  readOnly,
  ...commonProps
}) =>
  withMobrixUiValue({
    commonProps,
    name: "mobrix-ui-inputbox",
    wrapper: "input",
    props: (value, setValue) => ({
      additionalProps: {
        type: "text",
        value,
        placeholder,
        readOnly,
        onChange: (e) => {
          if (!readOnly) {
            const newValue = e.target.value ? e.target.value : "";
            onChange(newValue);
            setValue(newValue);
          }
        },
      },
    }),
    inputValue: value,
    defaultValue: "",
  });

export default Input;
