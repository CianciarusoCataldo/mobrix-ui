import "./styles.css";

import React from "react";

import { CheckBoxComponent } from "./types";

import { withMobrixUiValue } from "../../../utils";
import { DefaultCheckIcon } from "./icons";

/**
 * A checkbox element, totally customizable. The tick icon can be a custom image or Element (using `icon` prop).
 *
 * @since 1.0.0
 *
 * @param {boolean} value Checkbox initial value (checked / unchecked)
 * @param {(newValue: boolean) => void} onChange onChange callback called when Checkbox is clicked
 * @param {JSX.Element | Element} icon custom tick icon (if not set, the default one will be used)
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
  icon,
  ...commonProps
}) =>
  withMobrixUiValue<boolean>({
    name: "mobrix-ui-checkbox",
    commonProps,
    props: (actualValue, setValue) => ({
      Component: actualValue ? icon || DefaultCheckIcon : <div />,
      additionalProps: {
        onClick: () => {
          console.log(actualValue)
          onChange && onChange(!actualValue);
          setValue(!actualValue);
        },
      },
    }),
    inputValue: value,
    defaultValue: false,
  });

export default Checkbox;
