import "./styles.css";

import React from "react";

import { CheckBoxComponent } from "./types";

import { buildBoxComponent } from "../../../utils";

/**
 * A checkbox element, totally customizable. The tick icon can be a custom image or Element (using `icon` prop).
 *
 * @since 1.0.0
 *
 * @param {boolean} value Checkbox initial value (checked / unchecked)
 * @param {(newValue: boolean) => void} onChange onChange callback called when Checkbox is clicked
 * @param {JSX.Element | Element} icon custom tick icon (if not set, the default one will be used)
 * @param {JSX.Element | string} label `common MoBrix-ui prop` - Component top label
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example CheckBox usage</caption>
 * import { render } from "react-dom";
 * import { CheckBox } from 'mobrix-ui';
 *
 * render(<CheckBox value={true} />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CheckBox
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Checkbox: CheckBoxComponent = ({
  value,
  onChange,
  label,
  icon,
  ...commonProps
}) =>
  buildBoxComponent<boolean>({
    callBack: (actualValue, setValue) => {
      const iconToShow = icon || (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1171.000000 1280.000000"
          preserveAspectRatio="xMidYMid meet"
          fill="var(--mobrix-ui-link-color)"
        >
          <g
            transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M11555 12694 c-1288 -888 -2591 -2076 -3945 -3594 -1475 -1656 -3026
-3783 -4315 -5918 -72 -119 -115 -180 -123 -177 -8 3 -716 474 -1575 1048
-859 574 -1568 1047 -1576 1052 -11 6 -10 2 2 -16 98 -140 3704 -5078 3709
-5079 3 0 34 66 68 148 1225 2918 2422 5234 3838 7427 1148 1777 2481 3497
3899 5028 91 97 163 177 161 177 -2 0 -67 -43 -143 -96z"
            />
          </g>
        </svg>
      );

      return {
        name: "mobrix-ui-checkbox",
        Component: actualValue ? iconToShow : <div />,
        commonProps,
        additionalProps: {
          onClick: () => {
            onChange && onChange(!actualValue);
            setValue(!actualValue);
          },
        },
      };
    },
    value,
    defaultValue: false,
    label,
  });

export default Checkbox;
