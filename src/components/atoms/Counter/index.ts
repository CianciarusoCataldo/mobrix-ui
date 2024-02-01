import "./styles.css";

import { CounterComponent } from "../../../types";

import { buildMbxReactiveComponent } from "../../../tools";

/**
 *
 *
 * @param {number} value numeric input value
 * @param {string} placeholder label showed when no value is set
 * @param {boolean} readOnly if true, component value can only be set with `value` parameter
 * @param {number} min min allowed value
 * @param {number} max max allowed value
 * @param {(newValue: number) => void} onChange Callback triggered when Counter component input value is changed by the user
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
 * @see https://cianciarusocataldo.github.io/mobrix-ui/atoms/Counter
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
const Counter: CounterComponent = ({
  /* istanbul ignore next */
  onChange = () => {},
  value: inputValue,
  placeholder,
  readOnly,
  max,
  min,
  additionalProps = {},
  ...commonProps
}) =>
  buildMbxReactiveComponent<number | undefined>(
    commonProps,
    (parsedCommonProps) => ({
      wrapper: "input",
      name: "counterbox",
      inputValue,
      defaultValue: 0,
      props: (value, setValue) => ({
        additionalProps: {
          ...additionalProps,
          disabled: commonProps.disabled,
          type: "number",
          value: value,
          placeholder,
          readOnly,
          max,
          min,
          onChange: (e) => {
            if (!readOnly && !parsedCommonProps.disabled) {
              onChange(e.target.value);
              setValue(e.target.value);
            }
          },
        },
      }),
      commonProps: {
        ...parsedCommonProps,
        hover: parsedCommonProps.hover && !readOnly,
      },
    }),
  );

export default Counter;
