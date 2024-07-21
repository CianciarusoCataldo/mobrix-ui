import React, { useEffect, useState } from "react";

import { FormFieldProps, MbxUiReactiveComponent } from "../../../types";

import { formatters } from "./utils";

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
  onChange = () => {},
  required,
  validate = () => true,
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
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    if (validate(value) && !required && !value) {
      setError(false);
    } else if ((required && !value) || !validate(value)) {
      setError(true);
    }
  }, [required]);

  const FieldComponent: MbxUiReactiveComponent = formatters[type].component;

  return [
    <Label hide={!header} unstyled key="fld_h_b" dark={dark} {...headerProps}>
      {header}
    </Label>,
    <FieldComponent
      className={className}
      disabled={disabled}
      animated={animated}
      /* istanbul ignore next */
      {...{
        ...(anim && {
          animation: "shake",
        }),
        ...(error && {
          "data-mbx-fld-e": error,
        }),
      }}
      key="fld_comp"
      value={formatters[type].format(value)}
      shadow={shadow}
      dark={dark}
      background={background}
      onKeyDown={(e) => {
        /* istanbul ignore next */
        if (e.code === "Enter" && error) {
          setAnim(true);
          setTimeout(() => {
            setAnim(false);
          }, 600);
        }
      }}
      onChange={(newValue) => {
        const formattedValue = formatters[type].format(newValue);

        if (!validate(formattedValue) || (required && !newValue)) {
          setError(true);
        } else {
          setError(false);
        }
        onChange(formattedValue);
        setValue(formattedValue);
      }}
    />,
    <Container
      animated={animated}
      animation="fade-in"
      dark={dark}
      hide={!error}
      background={false}
      key="fld_eb"
      shadow={false}
    >
      {errorLabel}
    </Container>,
  ];
};

export default FormFieldInternalComponent;
