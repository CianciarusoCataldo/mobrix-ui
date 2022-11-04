import "./styles.css";

import React from "react";

import { DropdownComponent } from "./types";

import { buildBoxComponent } from "../../../utils";

/**
 * Show a list of elements in a dropdown menu (by default, with fade-in and out effects).
 * Can be easily customized and every element style and behaviour (with a callback) can
 * be customized too.
 *
 * @since 1.0.0
 *
 * @param {number} value actual selected element (as index). If not set, default value (0) will be used.
 * @param {{ name: string; icon?: JSX.Element }[]} content Dropdown content elements
 * @param {JSX.Element | string} label `common MoBrix-ui prop` - Component top label
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example Dropdown usage</caption>
 *import { render } from "react-dom";
 *import { Dropdown } from 'mobrix-ui';
 *
 * render(<Dropdown content={[{ name:"Element 0" }]} />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Dropdown
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Dropdown: DropdownComponent = ({
  content = [],
  onChange,
  value,
  label,
  ...commonProps
}) => {
  return buildBoxComponent<number>({
    defaultValue: 0,
    value,
    label,
    callBack: (value, setValue) => {
      let elements: JSX.Element[] = [];

      for (let i = 0; i < content.length; i++) {
        elements.push(
          <option key={"option_" + i} value={i}>
            {content[i]}
          </option>
        );
      }
      return {
        name: "mobrix-ui-dropdown",
        Component: (
          <div className="custom-select">
            <select
              onChange={(e) => {
                onChange && onChange(Number(e.target.value));
                setValue(Number(e.target.value));
              }}
              defaultValue={value}
            >
              {elements}
            </select>
          </div>
        ),
        commonProps,
      };
    },
  });
};

export default Dropdown;
