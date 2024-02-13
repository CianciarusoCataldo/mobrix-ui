import "./styles.css";

import { SliderComponent } from "../../../types";

import { buildMbxReactiveComponent } from "../../../tools";

/**
 * A modern `range` input component, to control a value using a simple slider
 *
 * @param {number} value Actual slider value
 * @param {number} min Min allowed value
 * @param {number} max Max allowed value
 * @param {boolean} readOnly if `true`, component value can only be set with `value` parameter
 * @param {(newValue: number) => void} onChange Callback triggered when Slider component input value is changed by the user
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
 * @see https://cianciarusocataldo.github.io/mobrix-ui/atoms/Slider
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since 2.0.0
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
const Slider: SliderComponent = ({
  /* istanbul ignore next */
  onChange = () => {},
  value: inputValue,
  min,
  max,
  readOnly,
  additionalProps,
  ...commonProps
}) =>
  buildMbxReactiveComponent<number>(commonProps, (parsedProps) => ({
    name: "slider",
    commonProps: parsedProps,
    inputValue,
    defaultValue: 0,
    wrapper: "input",
    props: (value, setValue) => {
      const callback =
        !parsedProps.disabled && !readOnly
          ? (e: any) => {
              onChange(e.target.value);
              setValue(e.target.value);
            }
          : () => {};
      return {
        additionalProps: {
          ...additionalProps,
          type: "range",
          min,
          max,
          readOnly,
          disabled: parsedProps.disabled,
          value: String(value),
          onChange: callback,
          onInput: callback,
        },
      };
    },
  }));

export default Slider;
