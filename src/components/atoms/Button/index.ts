import "./styles.css";

import { ButtonComponent } from "../../../types/components/atoms";

import { buildMobrixUiStandardComponent } from "../../../utils";

/**
 * A button component, designed for a lot of scenarios. Can be used as is, or as a clickable image
 * (through `unstyled` prop that removes all its standard styles).
 *
 * @since 1.0.0
 *
 * @param children button content
 * @param {boolean} disabled enable/disable the button click functionality (UI will reflect it too)
 * @param {()=>void} onClick callback triggered when the button is clicked
 * @param {()=>void} onMouseEnter callback triggered when the cursor enter the component
 * @param {()=>void} onMouseLeave callback triggered when the cursor exit the component
 * @param {string} className `common MoBrix-ui prop` - custom className
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component, enabling or not MoBrix-ui custom styles
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component
 * @param {boolean} animated `common MoBrix-ui prop` enable/disable component animations
 * @param {string} key `common MoBrix-ui prop` - custom component React key (the standard {@link https://reactjs.org/docs/lists-and-keys.html key parameter})
 * @param {boolean} a11y `common MoBrix-ui prop` - enable/disable accessibility features
 * @param {boolean} a11yDark `common MoBrix-ui prop` - if the `a11y` parameter is `true`, override standard focus color style with/without dark mode (normally, the color changes accordingly to the `dark` parameter)
 * @param {string} a11yLabel `common MoBrix-ui prop` - if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label aria-label}
 * @param {() => void} onFocus `common MoBrix-ui prop` - callback called when component is focused
 * @param {() => void} onFocusLost `common MoBrix-ui prop` - callback called when component focus is lost
 * @param {(keyEvent: any) => void} onKeyDown `common MoBrix-ui prop` - callback called when a key is pressed when inside the component
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
  className = "",
  onMouseEnter,
  onMouseLeave,
  ...commonProps
}) =>
  buildMobrixUiStandardComponent({
    name: "button",
    wrapper: "button",
    additionalProps: {
      disabled,
      onClick,
      onMouseEnter,
      onMouseLeave,
    },
    Component: children,
    commonProps: {
      ...commonProps,
      className: `${disabled ? "disabled" : "enabled"} ${className}`,
    },
  });

export default Button;
