import "./styles.css";

import React from "react";
import classNames from "classnames";

import { ButtonComponent } from "./types";

import { buildComponent } from "../../../utils";

/**
 * A button component, designed for a lot of scenarios. Can be used as is, or as a clickable image
 * (through `unstyled` prop that removes all its standard styles).
 *
 * @since 1.0.0
 *
 * @param {boolean} disabled enable/disable the button click functionality (UI will reflect it too)
 * @param children button content
 * @param {()=>void} onClick callback triggered when the button is clicked
 * @param {()=>void} onMouseEnter callback triggered when the cursor enter the component
 * @param {()=>void} onMouseLeave callback triggered when the cursor exit the component
 * @param {boolean} animated enable/disable button animations
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Button usage</caption>
 * import { render } from "react-dom";
 * import { Button } from 'mobrix-ui';
 *
 * render(<Button animated shadow onClick={()=>alert("Click !")}>
 *            Example button
 *        </Button>, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Button
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Button: ButtonComponent = ({
  disabled,
  children,
  onClick,
  className,
  onMouseEnter,
  onMouseLeave,
  animated,
  ...commonProps
}) =>
  buildComponent({
    name: "mobrix-ui-button",
    wrapper: "button",
    additionalProps: {
      disabled: disabled,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
    },
    Component: children,
    commonProps: {
      ...commonProps,
      className: classNames(className, {
        disabled: disabled,
        enabled: !disabled,
        effect: animated,
      }),
    },
  });

export default Button;
