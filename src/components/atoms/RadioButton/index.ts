import "./styles.css";

import { RadioButtonComponent } from "../../../types";

import { buildMobrixUiReactiveComponent } from "../../../tools";

import component from "./component";

/**
 * A single radio button component. Optionally, can prevent user to deselect it
 *
 * @param {boolean} value actual radio button value (icon visiblity)
 * @param {(newValue:boolean)=>void} onChange callback triggered when input change
 * @param {boolean} deselectable if `false`, the button can be selected only once (the value can't change then)
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
 * @example <caption>Example RadioButton usage</caption>
 * import { render } from "react-dom";
 * import { RadioButton } from 'mobrix-ui';
 *
 * render(<RadioButton animated value={true} />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/RadioButton
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
const RadioButton: RadioButtonComponent = ({
  value: inputValue,
  onChange = () => {},
  deselectable = true,
  onKeyDown = () => {},
  additionalProps = {},
  ...commonProps
}) =>
  buildMobrixUiReactiveComponent<boolean>({
    name: "radio-button",
    Component: ({ value, setValue }) => (value ? component : ""),
    defaultValue: false,
    inputValue,
    props: (value, setValue) => {
      const callBack = () => {
        if (!value || deselectable) {
          onChange(!value);
          setValue(!value);
        }
      };

      return {
        commonProps: {
          ...commonProps,
          ...(!commonProps.disabled && {
            onKeyDown: (e) => {
              if (e.code === "Enter") {
                callBack();
              }
              onKeyDown(e);
            },
          }),
        },
        additionalProps: {
          ...additionalProps,
          ...(!commonProps.disabled && {
            onClick: callBack,
          }),
        },
      };
    },
  });

export default RadioButton;
