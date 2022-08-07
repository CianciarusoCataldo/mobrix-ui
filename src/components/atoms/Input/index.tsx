import "./styles.css";

import React from "react";

import { InputComponent } from "./types";

import { buildBoxComponent } from "../../../utils";

/**
 * A flexible text input element
 *
 * @since 1.0.0
 *
 * @param {string} value text input value
 * @param {(newValue:string)=>void} onChange callback triggered when numeric input changes
 * @param {JSX.Element | string} label `common MoBrix-ui prop` - Component top label
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
  label,
  ...commonProps
}) =>
  buildBoxComponent({
    callBack: (value, setValue) => ({
      name: "mobrix-ui-inputbox",
      Component: (
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          className="input-box"
          readOnly={readOnly}
          onChange={(e) => {
            if (!readOnly) {
              const newValue = e.target.value ? e.target.value : "";
              onChange(newValue);
              setValue(newValue);
            }
          }}
        />
      ),
      commonProps,
    }),
    defaultValue: value || "",
    value,
    label,
  });

export default Input;
