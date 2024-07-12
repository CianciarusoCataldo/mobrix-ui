import React, { useEffect, useState } from "react";

import { FormFieldProps, MbxUiReactiveComponent } from "../../../types";

import { fieldFormatters } from "./utils";

import Container from "../Container";
import { Label } from "../../atoms";

const FormFieldInternalComponent: MbxUiReactiveComponent<
  any,
  FormFieldProps
> = ({
  value,
  setValue,
  type,
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

  const FieldComponent: MbxUiReactiveComponent =
    fieldFormatters[type].component;

  if (header) {
    components.push(
      <Label
        additionalProps={{
          "data-mbx-fld-h": true,
        }}
        shadow={false}
        animated={false}
        background={false}
        key="fld_h_b"
        dark={dark}
        scl="wfu"
        {...headerProps}
      >
        {header}
      </Label>
    );
  }

  /* istanbul ignore next */
  let extraProps = {
    ...(animate && {
      animation: "shake",
    }),
    ...(error && {
      "data-mbx-fld-e": error,
      scl: "bdtran",
    }),
  };

  components.push(
    <FieldComponent
      className={className}
      disabled={disabled}
      animated={animated}
      {...extraProps}
      key="fld_comp"
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
    />
  );

  components.push(
    <Container
      scl="fld-eb"
      animated={true}
      animation="fade-in"
      dark={dark}
      hide={!error}
      background={false}
      key="fld_eb"
      shadow={false}
    >
      {errorLabel}
    </Container>
  );

  return components;
};

export default FormFieldInternalComponent;
