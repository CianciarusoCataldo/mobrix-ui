import "./styles.css";

import { ToggleComponent } from "../../../types";

import toggleComponent from "./component";
import { buildMbxReactiveComponent } from "../../../tools";

/**
 * A compact Toggle switcher, customized to reflect its actual status
 *
 * @since 1.0.0
 *
 * @param {boolean} value toggle status (true - on/false - off)
 * @param {JSX.Element} icon custom toggle icon, used as a default icon
 * @param {JSX.Element} onIcon custom toggle `on` icon (`value` === `true`)
 * @param {JSX.Element} offIcon custom toggle `off` icon (`value` === `false`)
 * @param {(newValue:boolean)=>void} onChange calllback triggered when changing Toggle status
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
 * @example <caption>Example Toggle usage</caption>
 * import { render } from "react-dom";
 * import { Toggle } from 'mobrix-ui';
 *
 * render(<Toggle value={true} />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Toggle
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
const Toggle: ToggleComponent = ({
  value: inputValue,
  icon,
  offIcon,
  onIcon,
  onChange = () => {},
  additionalProps = {},
  ...commonProps
}) =>
  buildMbxReactiveComponent<boolean>(commonProps, (props) => ({
    name: "toggle",
    props: (status, setStatus) => ({
      additionalProps: {
        ...additionalProps,
        ...(!props.disabled && {
          onClick: () => {
            onChange(!status);
            setStatus(!status);
          },
          onKeyDown: (e) => {
            if (e.code === "Enter") {
              onChange(!status);
              setStatus(!status);
            }
          },
        }),
      },
    }),
    Component: ({ value, setValue }) =>
      toggleComponent({
        value,
        setValue,
        icon,
        offIcon,
        onIcon,
        ...props,
      }),
    defaultValue: true,
    inputValue,
    commonProps: props,
  }));

export default Toggle;
