import "./styles.css";
import { ToggleComponent } from "./types";
import React from "react";
import classNames from "classnames";

import { buildBoxComponent } from "../../../utils";

const DEFAULT_ICON = (
  <svg
    x={0}
    y={0}
    viewBox="0 0 64 64"
    xmlSpace="preserve"
    width="30px"
    height="30px"
  >
    <circle cx={32} cy={32} r={32} fill="var(--svgexternalcolor)" />
    <g className="wrapper">
      <path
        className="external"
        d="M32 52c-9.9 0-18-8.1-18-18 0-6.4 3.4-12.3 8.9-15.5 1-.6 2.2-.2 2.7.7.6 1 .2 2.2-.7 2.7C20.7 24.4 18 29.1 18 34c0 7.7 6.3 14 14 14s14-6.3 14-14c0-5.1-2.7-9.7-7.2-12.2-1-.5-1.3-1.8-.8-2.7.5-1 1.8-1.3 2.7-.8C46.5 21.5 50 27.5 50 34c0 9.9-8.1 18-18 18z"
      />
    </g>
    <g className="wrapper">
      <path
        className="external"
        d="M32 36c-1.1 0-2-.9-2-2V14c0-1.1.9-2 2-2s2 .9 2 2v20c0 1.1-.9 2-2 2z"
      />
    </g>
    <path
      className="internal"
      d="M39.8 18c4.9 2.7 8.2 8 8.2 14 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-5.9 3.2-11 7.9-13.8M32 32V12"
    />
  </svg>
);

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
 * import { Toggle } from '@cianciarusocataldo/modular-ui';
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
  value,
  icon,
  onChange,
  className,
  shadow,
  label,
  offIcon,
  onIcon,
  ...commonProps
}) => {
  const toggleIcon = icon || DEFAULT_ICON;
  const iconOn = onIcon || toggleIcon;
  const iconOff = offIcon || toggleIcon;
  const iconToShow = value === true ? iconOn : iconOff;

  return buildBoxComponent<boolean>({
    callBack: (status, setStatus) => ({
      name: "mobrix-ui-toggle",
      Component: (
        <div
          className={classNames("toggle-icon", {
            flip: !status,
            "flip-back": status,
          })}
        >
          {iconToShow}
        </div>
      ),
      commonProps,
      additionalProps: {
        onClick: () => {
          onChange && onChange(!status);
          setStatus(status);
        },
        className: classNames("container", className, {
          off: !status,
          shadowed: shadow,
        }),
      },
    }),
    defaultValue: true,
    value,
    label,
  });
};

export default Toggle;
