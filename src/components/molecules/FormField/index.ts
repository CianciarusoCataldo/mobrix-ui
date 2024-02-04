import "./styles.css";

import { FormFieldComponent } from "../../../types";

import FormFieldInternalComponent from "./component";
import { buildMbxReactiveComponent } from "../../../tools";

/**
* A single form field. Depending on its `type`, a different input component is used inside
*
* @param {'boolean' | 'text' | 'numeric' | 'radio' | 'checkbox' | 'toggle' | 'rater' | 'slider' | 'input' | 'counter'} type The field type. It determines the UI component to be used to render it. Allowed types are:
- `boolean` (rendered as a CheckBox)
- `numeric` (rendered as a Counter)
- `text` (rendered as a Input)
- `radio` (rendered as a RadioButton)
- `checkbox` (rendered as a CheckBox)
- `toggle` (rendered as a Toggle)
- `rater` (rendered as a Rater)
- `slider` (rendered as a Slider)
- `input` (rendered as a Input)
- `counter` (rendered as a Counter)
* @param {boolean} required If true, the field switch to error state if its value is empty
* @param {(fieldValue: any) => boolean} validate Custom validation function called on submit
* @param {`JSX.Element` | `string`} header Form field header
* @param {string} headerClassName Custom classname applied on every header element
* @param {Record<string, any>} headerProps Custom props applied on every header element (including MoBrix-ui shared props)
* @param {`JSX.Element` | `string`} errorLabel Custom error box content, displayed when FormField is in error state
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
* @see https://cianciarusocataldo.github.io/mobrix-ui/molecules/FormField
* @see https://cianciarusocataldo.github.io/mobrix-ui/docs
*
* @since 3.0.0
*
* @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
*
* @copyright 2023 Cataldo Cianciaruso
*/
const FormField: FormFieldComponent = ({
  value: inputValue,
  type,
  onChange,
  placeholder,
  required,
  validate,
  header,
  className,
  headerClassName,
  headerProps,
  errorLabel,
  ...sharedProps
}) => {
  return buildMbxReactiveComponent(sharedProps, (props) => ({
    name: "form-field",
    commonProps: {
      ...props,
      shadow: false,
      additionalProps: {
        ...props.additionalProps,
        "data-mbx-field-type": type,
      },
    },
    Component: ({ value, setValue }) =>
      FormFieldInternalComponent({
        value,
        setValue,
        type,
        onChange,
        placeholder,
        required,
        validate,
        header,
        headerProps,
        className,
        errorLabel,
        headerClassName,
        ...props,
      }),
    inputValue,
    defaultValue: null,
  }));
};

export default FormField;
