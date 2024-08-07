import React from "react";

import { BuilderComponent, FormProps, MbxUiComponent } from "../../../types";

import Button from "../../atoms/Button";
import FormField from "../../molecules/FormField";
import { Label } from "../../atoms";

const Component: MbxUiComponent<FormProps, BuilderComponent[]> = ({
  title,
  fields,
  onSubmit,
  submitContent,
  children,
  fieldClassName = "",
  dark,
  disabled,
  hover,
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

  const [vals, setVs] =
    React.useState<Record<string, string | boolean | number>>(d_fields);

  const cProps = { a11y, hover, disabled };
  return [
    <Label dark={dark} key="frm_tl" data-mbx-ftitle {...cProps}>
      {title}
    </Label>,
    ...Object.keys(d_fields).map((field, index) => {
      const { type = "text", header } = fields![field];

      return (
        <div className={fieldClassName} key={`f_fld_${index}`}>
          <FormField
            {...cProps}
            animated={animated}
            background={background}
            value={vals[field]}
            header={header}
            type={type}
            onChange={(vl: any) => {
              setVs({ ...vals, [field]: vl });
            }}
            headerProps={{ dark }}
          />
        </div>
      );
    }),
    children,
    <Button
      {...cProps}
      animated={false}
      key="form_s_bt"
      dark={!dark}
      onClick={() => {
        onSubmit && onSubmit(vals);
      }}
      data-mbx-sbt=""
    >
      {submitContent}
    </Button>,
  ];
};

export default Component;
