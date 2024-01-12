import React from "react";

import { BuilderComponent, FormProps, MoBrixUiComponent } from "../../../types";

import { fieldFormatters } from "../../molecules/FormField/utils";

import Button from "../../atoms/Button";
import FormField from "../../molecules/FormField";
import { Label } from "../../atoms";

const formComponent: MoBrixUiComponent<FormProps, BuilderComponent[]> = ({
  title,
  fields,
  onSubmit,
  submitLabel,
  children,
  fieldClassName = "",
  dark,
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
    <Label
      key="mobrix_ui_form_title"
      additionalProps={{ "data-mobrix-ui-class": "title" }}
      dark={dark}
    >
      {title}
    </Label>,
    ...Object.keys(dropdownFields).map((field, index) => {
      const fieldSettings = fields![field];

      const type = fieldSettings.type || "text";

      const callBack = (newValue: any) => {
        setValues({ ...values, [field]: newValue });
      };

      return (
        <div
          data-mobrix-ui-class="field"
          data-mobrix-ui-field-type={type}
          className={fieldClassName}
          key={`form_field_${index}`}
        >
          <FormField
            value={values[field]}
            header={fieldSettings.header}
            type={type}
            onChange={callBack}
            dark={!dark}
          />
        </div>
      );
    }),
  ];

  children && components.push(children);

  components.push(
    <Button
      key="mobrix_ui_form_submit_button"
      dark={!dark}
      additionalProps={{
        "data-mobrix-ui-test": "form_submit_button",
        "data-mobrix-ui-class": "submit-button",
      }}
      onClick={() => {
        onSubmit && onSubmit(values);
      }}
    >
      {submitLabel}
    </Button>
  );

  return components;
};

export default formComponent;
