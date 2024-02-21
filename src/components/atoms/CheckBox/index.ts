import "./styles.css";

import { CheckBoxComponent } from "../../../types";

import { buildMbxReactiveComponent } from "../../../tools";

import { DefaultCheckIcon } from "./icons";

/**
 * A checkbox element, totally customizable.
 *
 * @param {boolean} value Checkbox initial value (checked / unchecked)
 * @param {JSX.Element} icon custom tick icon (if not set, the default one will be used)
 * @param {(newValue: boolean) => void} onChange Callback triggered when CheckBox component input value is changed by the user
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
 *
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CheckBox
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since 1.0.0
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
const Checkbox: CheckBoxComponent = ({
  value: inputValue,
  onChange = () => {},
  icon,
  onKeyDown = () => {},
  ...commonProps
}) =>
  buildMbxReactiveComponent<boolean>(commonProps, (sharedProps) => ({
    name: "checkbox",
    Component: ({ value, setValue }) => (value ? icon || DefaultCheckIcon : ""),
    props: (actualValue, setValue) => ({
      commonProps: {
        ...sharedProps,
        additionalProps: {
          ...sharedProps.additionalProps,
          ...(!sharedProps.disabled && {
            onClick: () => {
              onChange(!actualValue);
              setValue(!actualValue);
            },
          }),
        },
        ...(!sharedProps.disabled && {
          onKeyDown: (e) => {
            onKeyDown(e);
            if (e.code === "Enter" || e.code === "Space") {
              onChange(!actualValue);
              setValue(!actualValue);
            }
          },
        }),
      },
    }),
    inputValue,
    defaultValue: false,
  }));

export default Checkbox;
