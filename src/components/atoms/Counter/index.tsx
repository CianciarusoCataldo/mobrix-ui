import "./styles.css";

import React from "react";

import { CounterComponent } from "./types";

import { buildBoxComponent } from "../../../utils";

/**
 * A flexible numeric input element
 *
 * @since 1.0.0
 *
 * @param {number} value numeric input value
 * @param {(newValue:number)=>void} onChange callback triggered when numeric input changes
 * @param {JSX.Element | string} label `common MoBrix-ui prop` - Component top label
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Counter usage</caption>
 *
 * import { render } from "react-dom";
 * import { Counter } from 'mobrix-ui';
 *
 * render(<Counter value={3} />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Counter
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Counter: CounterComponent = ({
  onChange,
  value,
  placeholder,
  readOnly,
  label,
  ...commonProps
}) =>
  buildBoxComponent<number>({
    callBack: (value, setValue) => ({
      name: "mobrix-ui-counterbox",
      Component: (
        <input
          type="number"
          value={value}
          placeholder={placeholder}
          className="input-box"
          readOnly={readOnly}
          onChange={(e) => {
            if (!readOnly) {
              const changedValue = e.target.value
                ? Number.parseInt(e.target.value)
                : 0;

              onChange && onChange(changedValue);
              setValue(changedValue);
            }
          }}
        />
      ),
      commonProps,
    }),
    defaultValue: value || 0,
    value,
    label,
  });

export default Counter;
