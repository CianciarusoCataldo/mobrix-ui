import React from "react";

import { BuilderComponent, MoBrixUiComponent } from "../../../utils/global";
import { FormProps } from "./types";

import { fieldFormatters } from "./utils";

import Button from "../../atoms/Button";

const formComponent: MoBrixUiComponent<FormProps, BuilderComponent[]> = ({
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

  return components;
};

export default formComponent