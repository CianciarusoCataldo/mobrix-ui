import React from "react";

import { BuilderComponent, FormProps, MbxUiComponent } from "../../../types";

import Button from "../../atoms/Button";
import FormField from "../../molecules/FormField";
import { Label } from "../../atoms";

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
  const d_fields: Record<string, string | boolean | number> = fields
    ? Object.keys(fields).reduce(
        (o, key) => ({
          ...o,
          [key]: undefined,
        }),
        {},
      )
    : {};

  const [values, setValues] =
    React.useState<Record<string, string | boolean | number>>(d_fields);

  const components = [
    <Label disabled={disabled} key="frm_tl" dark={dark} data-mbx-cls="title">
      {title}
    </Label>,
    ...Object.keys(d_fields).map((field, index) => {
      const fieldSettings = fields![field];

      const type = fieldSettings.type || "text";

      const callBack = (newValue: any) => {
        setValues({ ...values, [field]: newValue });
      };

      return (
        <div className={fieldClassName} key={`f_fld_${index}`}>
          <FormField
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
      key="form_s_bt"
      dark={!dark}
      onClick={() => {
        onSubmit && onSubmit(values);
      }}
      data-mbx-cls="s-bt"
    >
      {submitLabel}
    </Button>,
  );

  return components;
};

export default formComponent;
