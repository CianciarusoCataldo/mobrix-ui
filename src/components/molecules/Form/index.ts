import "./styles.css";

import { FormComponent } from "../../../types";

import { buildMobrixUiStandardComponent } from "../../../tools";

import formComponent from "./component";

/**
 * A totally configurable Form, with a submit button to let the user submit data from your web-app
 *
 * @since 1.0.0
 *
 * @param {string} title Form title
 * @param {Record<string,  { header?: string; type?: "boolean" | "text" | "numeric" }>} fields Form fields array. Every field must be an object with optionally 2 properties:
 *     - `header` - the text showed upon the field component)
 *     - `type` - the field type (will determine a specific type when returned, and also the UI component associated)
 *
 * allowed types are:
 * `boolean` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CheckBox CheckBox})
 * `numeric` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Counter Counter})
 * `text` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Input Input})
 *
 * A field object can be empty, in this case default values will be used (`input` type with empty header)
 * @param {(values: Record<string, string>) => void} onClick callback triggered on Form submit
 * @param {string} fieldClassName Custom className applied on every single field component
 * @param {JSX.Element | string} buttonContent custom submit button content
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
const Form: FormComponent = ({
  title,
  fields,
  onSubmit,
  submitLabel,
  children,
  fieldClassName,
  ...commonProps
}) =>
  buildMobrixUiStandardComponent({
    name: "form",
    Component: formComponent({
      title,
      fields,
      onSubmit,
      submitLabel,
      children,
      fieldClassName,
      ...commonProps,
    }),
    commonProps,
  });

export default Form;
