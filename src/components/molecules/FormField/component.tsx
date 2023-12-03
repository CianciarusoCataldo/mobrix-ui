import React, { useEffect, useState } from "react";

import {
  BuilderComponent,
  FormFieldProps,
  MobrixUiReactiveComponent,
} from "../../../types";

import { fieldFormatters } from "./utils";

import Container from "../Container";

const FormFieldInternalComponent: MobrixUiReactiveComponent<
  any,
  FormFieldProps & { errorLabel?: BuilderComponent; }
> = ({
  value,
  setValue,
  type,
  onChange = (newvalue: any) => { },
  placeholder,
  required,
  validate = (newvalue: any) => true,
  header,
  errorLabel,
  className,
  dark,
  unstyled,
  shadow,
  animated
}) => {
    const [error, setError] = useState(false);
    const [animate, setAnimated] = useState(false);

    useEffect(() => {
      if (validate(value) && !required) {
        setError(false);
      } else if (required && !value) {
        setError(true);
      }
    }, [required]);

    const components: JSX.Element[] = [];

    if (header) {
      components.push(
        <Container
          additionalProps={{
            "data-mobrix-ui-class": "form-field-box",
            "data-mobrix-ui-form-field-header-box": true,
          }}
          animated={animated}
          key="form_field_header_box"
          dark={!dark}
        >
          {header}
        </Container>
      );
    }

    const FieldComponent: MobrixUiReactiveComponent =
      fieldFormatters[type].component;

    components.push(
      <FieldComponent
        animated={animated}
        autoresizable
        additionalProps={{
          "data-mobrix-ui-class": "form-field-component",
          "data-mobrix-ui-form-field-error": error,
          ...(animate &&
          {
            ...{
              "data-mobrix-ui-animation": "shake"
            }
          })
        }}
        key="form_field_component"
        value={fieldFormatters[type].format(value)}
        shadow={shadow}
        dark={dark}
        unstyled={unstyled}
        onKeyDown={(e) => {
          if (e.code === "Enter" && error) {
            setAnimated(true);
            setTimeout(() => {
              setAnimated(false);
            }, 600);
          }
        }}
        onChange={(newValue) => {
          const formattedValue = fieldFormatters[type].format(newValue);

          if (!validate(formattedValue) || (required && !formattedValue)) {
            setError(true);
          } else if (error) {
            setError(false);
          }

          onChange(formattedValue);

          setValue(formattedValue);
        }}
      />
    );

    components.push(
      <Container
        additionalProps={{
          "data-mobrix-ui-class": "form-field-box",
          "data-mobrix-ui-form-field-error-box": true,
        }}
        animated={true}
        dark={dark}
        hide={!error}
        key="form_field_error_box"
      >
        {errorLabel}
      </Container>
    );

    return components;
  };

export default FormFieldInternalComponent;
