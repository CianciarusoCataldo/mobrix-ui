import "./styles.css";

import React from "react";

import { FormComponent } from "./types";

import { buildComponent } from "../../../utils";

import Button from "../../atoms/Button";
import CheckBox from "../../atoms/CheckBox";
import Counter from "../../atoms/Counter";
import Input from "../../atoms/Input";
import { fieldFormatters } from "./utils";

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
 *     - `boolean` (rendered as a {@link CheckBox})
 *     - `numeric` (rendered as a {@link Counter})
 *     - `text` (rendered as a {@link Input})
 *
 * A field object can be empty, in this case default values will be used (`input` type with empty header)
 * @param {(values: Record<string, string>) => void} onClick callback triggered on Form submit
 * @param {string} fieldClassName Custom className applied on every single field component
 * @param {JSX.Element | string} buttonContent custom submit button content
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
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
 * @copyright 2022 Cataldo Cianciaruso
 */
const Form: FormComponent = ({
  title,
  fields,
  onClick,
  buttonContent,
  children,
  fieldClassName = "",
  ...commonProps
}) => {
  const dropdownFields: Record<string, string | boolean | number> = fields
    ? Object.keys(fields).reduce(
        (o, key) => ({
          ...o,
          [key]: null,
        }),
        {}
      )
    : {};

  const [values, setValues] =
    React.useState<Record<string, string | boolean | number>>(dropdownFields);

  const components = [
    <p key="mobrix_ui_form_title" className="title">
      {title}
    </p>,
    ...Object.keys(dropdownFields).map((field, index) => {
      const fieldSettings = fields && fields[field] ? fields[field] : {};

      const type = fieldSettings.type || "text";

      let FieldElement: (props: any) => JSX.Element =
        fieldFormatters[type].component;

      const callBack = (newValue: any) => {
        let formattedValue = fieldFormatters[type].format(newValue);
        setValues({ ...values, [field]: formattedValue });
      };

      const value =
        values[field] !== null
          ? fieldFormatters[type].format(values[field])
          : undefined;

      return (
        <div className={"field " + fieldClassName} key={`form_field_${index}`}>
          {fieldSettings.header && (
            <span className="header" key={`form_field_${index}_header`}>
              {fieldSettings.header}
            </span>
          )}
          <FieldElement
            value={value}
            id={`form-field-${index}`}
            key={`form_field_${index}_element`}
            className="form-input"
            placeholder={fieldSettings.placeholder}
            onChange={callBack}
            autocomplete="off"
          />
        </div>
      );
    }),
  ];

  children && components.push(children);

  components.push(
    <Button
      key="mobrix_ui_form_submit_button"
      className="submit-button"
      dark={!commonProps.dark}
      id="form-submit-button"
      onClick={() => {
        onClick && onClick(values);
      }}
    >
      {buttonContent}
    </Button>
  );

  return buildComponent({
    name: "mobrix-ui-form",
    Component: components,
    commonProps,
  });
};

export default Form;
