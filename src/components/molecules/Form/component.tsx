import React from "react";

import {
  BuilderComponent,
  FormProps,
  MoBrixUiComponent,
} from "../../../types";

import { fieldFormatters } from "../FormField/utils";

import Button from "../../atoms/Button";
import FormField from "../FormField";

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
    <p key="mobrix_ui_form_title" className="title">
      {title}
    </p>,
    ...Object.keys(dropdownFields).map((field, index) => {
      const fieldSettings = fields![field];

      const type = fieldSettings.type || "text";

      const callBack = (newValue: any) => {
        setValues({ ...values, [field]: newValue });
      };

      return (
        <div className={"field " + fieldClassName} key={`form_field_${index}`}>
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
      className="submit-button"
      dark={!dark}
      additionalProps={{ "data-mobrix-ui-test": "form_submit_button" }}
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
