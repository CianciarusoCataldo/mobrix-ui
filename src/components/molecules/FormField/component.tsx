import React, { useEffect, useState } from "react";

import { FormFieldProps, MobrixUiReactiveComponent } from "../../../types";

import { fieldFormatters } from "./utils";

import Container from "../Container";

const FormFieldInternalComponent: MobrixUiReactiveComponent<
  any,
  FormFieldProps
> = ({
  value,
  setValue,
  type = "text",
  /* istanbul ignore next */
  onChange = (newvalue: any) => {},
  required,
  validate = (newvalue: any) => true,
  header,
  errorLabel,
  className,
  dark,
  background,
  shadow,
  animated,
  disabled,
  headerProps = {},
}) => {
  const isError = (required && !value) || !validate(value);
  const [error, setError] = useState(isError);
  const [animate, setAnimated] = useState(false);

  useEffect(() => {
    if (validate(value) && !required && !value) {
      setError(false);
    } else if ((required && !value) || !validate(value)) {
      setError(true);
    }
  }, [required]);

  const components: JSX.Element[] = [];

  if (header) {
    components.push(
      <Container
        additionalProps={{
          "data-mbx-class": "form-field-box",
          "data-mbx-form-field-header-box": true,
        }}
        shadow={false}
        animated={false}
        background={false}
        key="form_field_header_box"
        dark={dark}
        {...headerProps}
      >
        {header}
      </Container>,
    );
  }

  const FieldComponent: MobrixUiReactiveComponent =
    fieldFormatters[type].component;

  components.push(
    <FieldComponent
      className={className}
      disabled={disabled}
      animated={animated}
      additionalProps={{
        "data-mbx-class": "form-field-component",
        "data-mbx-form-field-error": error,
        .../* istanbul ignore next */
        (animate && {
          ...{
            "data-mbx-animation": "shake",
          },
        }),
      }}
      key="form_field_component"
      value={fieldFormatters[type].format(value)}
      shadow={shadow}
      dark={dark}
      background={background}
      onKeyDown={(e) => {
        /* istanbul ignore next */
        if (e.code === "Enter" && error) {
          setAnimated(true);
          setTimeout(() => {
            setAnimated(false);
          }, 600);
        }
      }}
      onChange={(newValue) => {
        const formattedValue = fieldFormatters[type].format(newValue);

        if (!validate(formattedValue) || (required && !newValue)) {
          setError(true);
        } else {
          setError(false);
        }

        onChange(formattedValue);

        setValue(formattedValue);
      }}
    />,
  );

  components.push(
    <Container
      additionalProps={{
        "data-mbx-class": "form-field-box",
        "data-mbx-form-field-error-box": true,
      }}
      animated={true}
      dark={dark}
      hide={!error}
      key="form_field_error_box"
    >
      {errorLabel}
    </Container>,
  );

  return components;
};

export default FormFieldInternalComponent;
