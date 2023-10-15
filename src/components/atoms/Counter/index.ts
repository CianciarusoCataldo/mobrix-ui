import "./styles.css";

import { CounterComponent } from "../../../types";

import { buildMobrixUiReactiveComponent } from "../../../tools";

/**
 * A flexible numeric input element
 *
 * @since 1.0.0
 *
 * @param {number} value numeric input value
 * @param {(newValue:number)=>void} onChange callback triggered when numeric input changes
 * @param {string} placeholder label showed when no value is set
 * @param {boolean} readonly if true, component value can only be set with `value` parameter
 * @param {number} min min allowed value
 * @param {number} max max allowed value
 * @param {string} className `common MoBrix-ui prop` - custom className
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component, enabling or not MoBrix-ui custom styles
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component
 * @param {boolean} animated `common MoBrix-ui prop` enable/disable component animations
 * @param {string} key `common MoBrix-ui prop` custom component React key (the standard {@link https://reactjs.org/docs/lists-and-keys.html key parameter})
 * @param {boolean} a11y `common MoBrix-ui prop` enable/disable accessibility features
 * @param {boolean} a11yDark `common MoBrix-ui prop` if the `a11y` parameter is `true`, override standard focus color style with/without dark mode (normally, the color changes accordingly to the `dark` parameter)
 * @param {string} a11yLabel `common MoBrix-ui prop` if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label aria-label}
 * @param {() => void} onFocus `common MoBrix-ui prop` callback called when component is focused
 * @param {() => void} onFocusLost `common MoBrix-ui prop` callback called when component focus is lost
 * @param {(keyEvent: any) => void} onKeyDown `common MoBrix-ui prop` callback called when a key is pressed when inside the component
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
 * @copyright 2023 Cataldo Cianciaruso
 */
const Counter: CounterComponent = ({
  onChange,
  value: inputValue,
  placeholder,
  readOnly,
  max,
  min,
  ...commonProps
}) =>
  buildMobrixUiReactiveComponent<number | undefined>({
    wrapper: "input",
    name: "counterbox",
    inputValue,
    defaultValue: undefined,
    props: (value, setValue) => ({
      additionalProps: {
        type: "number",
        value: value,
        placeholder,
        readOnly,
        max,
        min,
        onChange: (e) => {
          if (!readOnly) {
            onChange && onChange(Number(e.target.value));
            setValue(Number(e.target.value));
          }
        },
      },
    }),
    commonProps,
  });

export default Counter;
