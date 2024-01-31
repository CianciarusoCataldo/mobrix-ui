import "./styles.css";

import { ToggleComponent } from "../../../types";

import toggleComponent from "./component";
import { buildMbxReactiveComponent } from "../../../tools";

/**
 *
 *
 * @param {boolean} value toggle status (true - on/false - off)
 * @param {JSX.Element} onIcon custom toggle `on` icon (`value` === `true`)
 * @param {JSX.Element} icon custom toggle icon, used as a default icon
 * @param {JSX.Element} offIcon custom toggle `off` icon (`value` === `false`)
 * @param {(newValue: boolean) => void} onChange Callback triggered when Toggle component input value is changed by the user
 * @param {string} key - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - React key, the standard [key parameter](https://reactjs.org/docs/lists-and-keys.html)
 * @param {string} className - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - custom className applied on main container
 * @param {boolean} dark - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable dark mode
 * @param {boolean} hide - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Hide/show component
 * @param {string} id - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - [id parameter](https://www.w3schools.com/html/html_id.asp) (for styling/testing purpose, to easily find the component into the DOM)
 * @param {boolean} shadow - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable shadow behind component
 * @param {CSSProperties} style - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Css inline properties applied on main container
 * @param {boolean} unstyled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons)
 * @param {boolean} animated - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component animations
 * @param {boolean} background - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component background
 * @param {boolean} hover - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component hover standard styles
 * @param {boolean} disabled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If true, disable the component. The effect may vary depending on the component type
 * @param {Record<string, any>} additionalProps - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom additional properties, applied to the component
 *
 *
 * @example MBX_EXAMPLE
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/atoms/Toggle
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since
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
