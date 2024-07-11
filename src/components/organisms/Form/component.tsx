import React from "react";

import { BuilderComponent, FormProps, MbxUiComponent } from "../../../types";

import Button from "../../atoms/Button";
import FormField from "../../molecules/FormField";
import { Label } from "../../atoms";
import { fieldFormatters } from "../../molecules/FormField/utils";

const formComponent: MbxUiComponent<FormProps, BuilderComponent[]> = ({
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
        {}
      )
    : {};

  const [values, setValues] =
    React.useState<Record<string, string | boolean | number>>(dropdownFields);

  const components = [
    <Label
      disabled={disabled}
      key="form_title"
      dark={dark}
      scl="title;mxauto"
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
          data-mbx-scl={`${type};f-field`}
          className={fieldClassName}
          key={`f_field_${index}`}
        >
          <FormField
            shadow={shadow}
            disabled={disabled}
            value={values[field]}
            header={fieldSettings.header}
            type={type}
            onChange={callBack}
            hover={hover}
            headerProps={{ dark }}
            scl={fieldFormatters[type].scl.frm}
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
      key="form_s_bt"
      dark={!dark}
      onClick={() => {
        onSubmit && onSubmit(values);
      }}
      scl="s-bt;mxauto"
    >
      {submitLabel}
    </Button>
  );

  return components;
};

export default formComponent;
