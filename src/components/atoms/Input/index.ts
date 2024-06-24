import "./styles.css";

import { InputComponent } from "../../../types";

import { buildMbxReactiveComponent } from "../../../tools";

/**
 * A flexible text input element
 *
 * @param {string} value text input value
 * @param {string} placeholder label showed when no value is set
 * @param {boolean} readOnly if true, component value can only be set with `value` parameter
 * @param {(newValue: string) => void} onChange Callback triggered when Input component input value is changed by the user
 * @param {string} key - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - React key, the standard [key parameter](https://reactjs.org/docs/lists-and-keys.html)
 * @param {string} className - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - custom className applied on main container
 * @param {boolean} dark - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable dark mode
 * @param {boolean} hide - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Hide/show component
 * @param {string} id - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - [id parameter](https://www.w3schools.com/html/html_id.asp) (for styling/testing purpose, to easily find the component into the DOM)
 * @param {boolean} shadow - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable shadow behind component
 * @param {CSSProperties} style - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Css inline properties applied on main container
 * @param {boolean} unstyled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons)
 * @param {boolean} animated - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component animations
 * @param {'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-top' | 'shake'} animation - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `animated`=`true`, this parameter specifies which animation is used when component is rendered
 * @param {boolean} background - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component background
 * @param {boolean} hover - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component hover standard styles
 * @param {boolean} disabled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If true, disable the component. The effect may vary depending on the component type
 * @param {Record<string, any>} additionalProps - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom additional properties, applied to the component
 *
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Input
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since 1.0.0
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
const Input: InputComponent = ({
  /* istanbul ignore next */
  onChange = () => {},
  value: inputValue,
  placeholder,
  readOnly,
  autoresizable,
  ...commonProps
}) =>
  buildMbxReactiveComponent<string | undefined>(commonProps, (sharedProps) => ({
    name: "inputbox",
    wrapper: "input",
    features: {
      opacityOnHover: true,
    },
    props: (value, setValue) => ({
      commonProps: {
        ...sharedProps,
        hover: sharedProps.hover && !readOnly,
        additionalProps: {
          ...sharedProps.additionalProps,
          ...(autoresizable && {
            "data-mbx-autoresizable": !!autoresizable,
            size: Math.ceil(value.length / 2) + (value.length > 0 ? 0 : 1),
          }),
          type: "text",
          value,
          placeholder,
          disabled: sharedProps.disabled,
          readOnly: readOnly || sharedProps.disabled,
          onChange: (e) => {
            if (!readOnly && !sharedProps.disabled) {
              const newValue = e.target.value ? e.target.value : "";
              onChange(newValue);
              setValue(newValue);
            }
          },
        },
      },
    }),
    inputValue,
    defaultValue: "",
  }));

export default Input;
