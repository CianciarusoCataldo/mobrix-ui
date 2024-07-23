import React from "react";

import { BuilderComponent, FormProps, MbxUiComponent } from "../../../types";

import Button from "../../atoms/Button";
import FormField from "../../molecules/FormField";
import { Label } from "../../atoms";

const Component: MbxUiComponent<FormProps, BuilderComponent[]> = ({
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
  background,
  a11y,
  animated,
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

  const cProps = { a11y, dark, hover, disabled };
  const cmps = [
    <Label key="frm_tl" data-mbx-ftitle {...cProps}>
      {title}
    </Label>,
    ...Object.keys(d_fields).map((field, index) => {
      const { type = "text", header } = fields![field];

      return (
        <div className={fieldClassName} key={`f_fld_${index}`}>
          <FormField
            {...cProps}
            animated={animated}
            shadow={shadow}
            background={background}
            value={values[field]}
            header={header}
            type={type}
            onChange={(vl: any) => {
              setValues({ ...values, [field]: vl });
            }}
            headerProps={{ dark }}
          />
        </div>
      );
    }),
  ];

  children && cmps.push(children);

  cmps.push(
    <Button
      {...cProps}
      animated={false}
      shadow={shadow}
      key="form_s_bt"
      dark={!dark}
      onClick={() => {
        onSubmit && onSubmit(values);
      }}
      data-mbx-sbt=""
    >
      {submitLabel}
    </Button>,
  );

  return cmps;
};

export default Component;
