import "./styles.css";

import { CheckBoxComponent } from "./types";

import { buildMobrixUiReactiveComponent } from "../../../utils";

import { DefaultCheckIcon } from "./icons";

/**
 * A checkbox element, totally customizable. The tick icon can be a custom image or an Element (using `icon` prop).
 *
 * @since 1.0.0
 *
 * @param {boolean} value Checkbox initial value (checked / unchecked)
 * @param {(newValue: boolean) => void} onChange onChange callback called when Checkbox is clicked
 * @param {JSX.Element | Element} icon custom tick icon (if not set, the default one will be used)
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
 * @param {()=>{}} onFocusLost `common MoBrix-ui prop` - callback called when component focus is lost
 * @param {(e: any) => void} onKeyDown `common MoBrix-ui prop` - callback called when a key is pressed when inside the component
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
  onKeyDown = () => {},
  ...commonProps
}) =>
  buildMobrixUiReactiveComponent<boolean>({
    name: "checkbox",
    props: (actualValue, setValue) => ({
      commonProps: {
        ...commonProps,
        onKeyDown: (e) => {
          onKeyDown(e);
          if (e.code === "Enter" || e.code === "Space") {
            setValue(!actualValue);
          }
        },
      },
      Component: actualValue ? icon || DefaultCheckIcon : "",
      additionalProps: {
        onClick: () => {
          onChange && onChange(!actualValue);
          setValue(!actualValue);
        },
      },
    }),
    inputValue: value,
    defaultValue: false,
  });

export default Checkbox;
