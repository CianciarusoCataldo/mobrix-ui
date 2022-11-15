import "./styles.css";

import React from "react";

import { FormComponent } from "./types";

import { buildComponent } from "../../../utils";

import Button from "../../atoms/Button";
import CheckBox from "../../atoms/CheckBox";
import Counter from "../../atoms/Counter";
import Input from "../../atoms/Input";

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
 *
 * A field object can be empty, in this case default values will be used (`input` type with empty header)
 * @param {(values: Record<string, string>) => void} onSubmit callback triggered on Form submit
 * @param {string} submitLabel custom submit button label
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Form usage</caption>
 * import { render } from "react-dom";
 * import { Field } from 'mobrix-ui';
 *
 * render(<Form fields={{ "Field 0": { header:"Field 0 header" } }} onSubmit={()=>alert('Submitted !')} />, document.getElementById("root"));
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
  onSubmit,
  submitLabel,
  ...commonProps
}) => {
  const dropdownFields: Record<string, string | boolean | number> = fields
    ? Object.keys(fields).reduce(
        (o, key) => ({
          ...o,
          [key]:
            fields[key].type === "boolean"
              ? false
              : fields[key].type === "numeric"
              ? 0
              : "",
        }),
        {}
      )
    : {};

  const [values, setValues] =
    React.useState<Record<string, string | boolean | number>>(dropdownFields);

  return buildComponent({
    name: "mobrix-ui-form",
    Component: [
      <p key="mobrix_ui_form_title" className="title">
        {title}
      </p>,
      ...Object.keys(dropdownFields).map((field, index) => {
        const name = field;
        const { type, header } = fields![field];

        let FieldElement: (props: any) => JSX.Element = Input;

        let fieldProps: Record<string, any> = {
          value: String(values[field]),
          id: `form-field-${index}`,
          onChange: (newValue: string) => {
            let tmpValues = { ...values };
            let value = String(newValue);
            if (value.length < 1) {
              tmpValues[name] = "";
            } else {
              tmpValues[name] = value;
            }

            setValues(tmpValues);
          },
          className: "form-input",
        };

        if (type) {
          switch (type) {
            case "boolean":
              {
                FieldElement = CheckBox;
                fieldProps = {
                  ...fieldProps,
                  className: "",
                  value: values[field] as boolean,
                  onChange: (value: boolean) => {
                    let tmpValues = { ...values };
                    tmpValues[field] = value;
                    setValues(tmpValues);
                  },
                };
              }
              break;
            case "numeric":
              {
                FieldElement = Counter;
                fieldProps = {
                  ...fieldProps,
                  value: values[field] as number,
                  onChange: (value: number) => {
                    let tmpValues = { ...values };
                    tmpValues[field] = value;
                    setValues(tmpValues);
                  },
                };
              }
              break;
          }
        }

        return (
          <div className="field" key={`form_field_${index}`}>
            <span className="header">{header}</span>
            {<FieldElement {...fieldProps} />}
          </div>
        );
      }),
      <div key="mobrix_ui_form_submit_button" className="submit-button">
        <Button
          dark={!commonProps.dark}
          id="form-submit-button"
          onClick={() => {
            onSubmit && onSubmit(values);
          }}
        >
          {submitLabel}
        </Button>
      </div>,
    ],
    commonProps,
  });
};

export default Form;
