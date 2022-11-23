import "./styles.css";

import { InputComponent } from "./types";

import { buildMobrixUiReactiveComponent } from "../../../utils";

/**
 * A flexible text input element
 *
 * @since 1.0.0
 *
 * @param {string} value text input value
 * @param {(newValue:string)=>void} onChange callback triggered when numeric input changes
 * @param {string} className `common MoBrix-ui prop` - custom className
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component, enabling or not MoBrix-ui custom styles
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component
 * @param {boolean} animated `common MoBrix-ui prop` enable/disable component animations
 * @param {string} key `common MoBrix-ui prop` enable/disable component animations
 * @param {boolean} a11y `common MoBrix-ui prop` enable/disable accessibility features
 * @param {boolean} a11yDark `common MoBrix-ui prop` if the `a11y` parameter is `true`, override standard focus color style with/without dark mode (normally, the color changes accordingly to the `dark` parameter)
 * @param {string} a11yLabel `common MoBrix-ui prop` if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label aria-label}
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
  buildMobrixUiReactiveComponent<string | undefined>({
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
