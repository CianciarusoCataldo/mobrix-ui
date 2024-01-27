import "./styles.css";

import { FormFieldComponent } from "../../../types";

import FormFieldInternalComponent from "./component";
import { buildMbxReactiveComponent } from "../../../tools";

/**
 * A smart Form field, that render different components based on its type, to be better integrated into every scenario (for example, a Login form)
 *
 * @since 3.0.0
 *
 * @param {JSX.Element | string} header Form field header
 * @param {JSX.Element | string} errorLabel custom error box content
 * @param {boolean} required
 * @param {(value: any)=>boolean} validate
 * @param {(value:any) => void} onChange callback triggered when input value changes
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
 * @example <caption>Example Form usage</caption>
 * import { render } from "react-dom";
 * import { Form } from 'mobrix-ui';
 *
 * render(<Form fields={{ "Field 0": { header:"Field 0 header" } }} buttonContent="Submit" onClick={()=>alert('Submitted !')} />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Form
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
  headerProps,
  errorLabel,
  ...sharedProps
}) => {
  return buildMbxReactiveComponent(sharedProps, (props) => ({
    name: "form-field",
    commonProps: { ...props, shadow: false },
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
        className,
        errorLabel,
        ...props,
      }),
    inputValue,
    defaultValue: null,
  }));
};

export default FormField;
