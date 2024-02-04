import React from "react";

import { BuilderComponent, FormProps, MoBrixUiComponent } from "../../../types";

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
  disabled,
  hover,
  shadow,
}) => {
  const dropdownFields: Record<string, string | boolean | number> = fields
    ? Object.keys(fields).reduce(
        (o, key) => ({
          ...o,
          [key]: undefined,
        }),
        {},
      )
    : {};

  const [values, setValues] =
    React.useState<Record<string, string | boolean | number>>(dropdownFields);

  const components = [
    <Label
      disabled={disabled}
      key="mobrix_ui_form_title"
      additionalProps={{ "data-mbx-class": "title" }}
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
          data-mbx-class="field"
          data-mbx-field-type={type}
          className={fieldClassName}
          key={`form_field_${index}`}
        >
          <FormField
            additionalProps={{
              "data-mbx-test": `form_field_${field}`,
            }}
            shadow={shadow}
            disabled={disabled}
            value={values[field]}
            header={fieldSettings.header}
            type={type}
            onChange={callBack}
            hover={hover}
            headerProps={{ dark }}
          />
        </div>
      );
    }),
  ];

  children && components.push(children);

  components.push(
    <Button
      disabled={disabled}
      animated={false}
      hover={hover}
      shadow={shadow}
      key="mobrix_ui_form_submit_button"
      dark={!dark}
      additionalProps={{
        "data-mbx-class": "submit-button",
      }}
      onClick={() => {
        onSubmit && onSubmit(values);
      }}
    >
      {submitLabel}
    </Button>,
  );

  return components;
};

export default formComponent;
