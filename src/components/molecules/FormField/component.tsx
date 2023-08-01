import React, { useEffect, useState } from "react";
import classnames from "classnames";

import {
  BuilderComponent,
  FormFieldProps,
  MobrixUiReactiveComponent,
} from "mobrix-ui-types";

import { fieldFormatters } from "./utils";

import Container from "../Container";

const FormFieldInternalComponent: MobrixUiReactiveComponent<
  any,
  FormFieldProps & { errorLabel?: BuilderComponent; header?: BuilderComponent }
> = ({
  value,
  setValue,
  type,
  onChange = (newvalue: any) => {},
  placeholder,
  required,
  validate = (newvalue: any) => true,
  header,
  errorLabel,
  className,
  dark,
  unstyled,
  shadow,
}) => {
  const [error, setError] = useState(false);
  const [stateClassName, setStateClassName] = useState("idle");

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
        className="form-field-box form-field-header-box"
        animated
        key="form_field_header_box"
        dark={dark}
      >
        {header}
      </Container>
    );
  }

  const FieldComponent: MobrixUiReactiveComponent =
    fieldFormatters[type].component;

  components.push(
    <FieldComponent
      key="form_field_component"
      value={value}
      shadow={shadow}
      dark={dark}
      unstyled={unstyled}
      className={classnames(className, "form-field-component", stateClassName, {
        "field-error": error,
      })}
      onKeyDown={(e) => {
        if (e.code === "Enter" && error) {
          setStateClassName("invalid");
          setTimeout(() => {
            setStateClassName("idle");
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
      className="form-field-box form-field-error-box"
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
