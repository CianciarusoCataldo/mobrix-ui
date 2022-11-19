import "./styles.css";

import { ToggleComponent } from "./types";

import { withMobrixUiValue } from "../../../utils";

import toggleComponentBuilder from "./builder";

/**
 * A compact Toggle switcher, customized to reflect its actual status
 *
 * @since 1.0.0
 *
 * @param {boolean} value toggle status (true - on/false - off)
 * @param {JSX.Element} icon custom toggle icon, used as a default icon
 * @param {JSX.Element} onIcon custom toggle "on" icon (`value` === `true`)
 * @param {JSX.Element} offIcon custom toggle "off" icon (`value` === `false`)
 * @param {(newValue:boolean)=>void} onChange calllback triggered when changing Toggle status
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
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
 * @copyright 2022 Cataldo Cianciaruso
 */
const Toggle: ToggleComponent = ({
  value: inputValue,
  icon,
  onChange,
  className,
  shadow,
  offIcon,
  onIcon,
  ...commonProps
}) =>
  withMobrixUiValue<boolean>({
    name: "mobrix-ui-toggle",
    props: (status, setStatus) => ({
      ...toggleComponentBuilder({
        setValue: setStatus,
        value: status,
        onChange,
        className,
        offIcon,
        onIcon,
        shadow,
        ...commonProps,
      }),
      additionalProps: {
        onClick: () => {
          onChange && onChange(!status);
          setStatus(!status);
        },
      },
    }),
    defaultValue: true,
    inputValue,
  });

export default Toggle;
