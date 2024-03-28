import "./styles.css";

import { RadioButtonGroupComponent } from "../../../types";

import { buildMbxReactiveComponent } from "../../../tools";

import radioButtonGroupComponent from "./component";

/**
 * A flexible and fully customizable radio buttons group
 *
 * @param {number} value Selected RadioButton (as index)
 * @param {{ component: `JSX.Element`, text: `string`, textPosition:  'top' | 'bottom' | 'left' | 'right' }[]} buttons Radio elements array. Every element UI can be driven with attributes.
 * A radio element can contain 3 fields:
 * - `component`: custom component rendered before radio button
 * - `text`: custom radio text showed near the radio button
 * - `textPosition`: custom text position
 * @param {string} elementClassName Classname applied on every radio element
 * @param {RadioButtonProps} radioProps RadioButton props applied on every RadioButton element
 * @param {'top' | 'bottom' | 'left' | 'right'} defaultPosition Default text position for RadioButton elements (when `textPosition` is not provided)
 * @param {boolean} horizontal If `true`, the RadioButton elements are displayed horizontally
 * @param {(newValue: number) => void} onChange Callback triggered when a RadioButton is clicked by the user, giving its index as parameter
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
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/RadioButtonGroup
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since 2.0.0
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
const RadioButtonGroup: RadioButtonGroupComponent = ({
  value: inputValue,
  horizontal,
  ...props
}) =>
  buildMbxReactiveComponent<number>(props, (sharedProps) => ({
    name: "radio-button-group",
    defaultValue: -1,
    inputValue,
    commonProps: {
      ...sharedProps,
      additionalProps: {
        ...sharedProps.additionalProps,
        "data-mbx-orientation": horizontal,
      },
    },
    Component: ({ value, setValue }) =>
      radioButtonGroupComponent({
        value,
        setValue,
        horizontal,
        ...props,
        ...sharedProps,
      }),
  }));

export default RadioButtonGroup;
