import React, { useEffect, useState } from "react";

import { FormFieldProps, MbxUiReactiveComponent } from "../../../types";

import { fldfn, vFuncs } from "./utils";

import Container from "../Container";
import { Label } from "../../atoms";

const FrmComponent: MbxUiReactiveComponent<any, FormFieldProps> = ({
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
  hover,
  a11y,
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

  const frmt = fldfn[type] || fldfn.text;
  const fFunc = vFuncs[frmt[1]];
  const Cmp = frmt[0];

  const sProps = { dark, disabled, animated, hover, background, a11y };
  return [
    <Label hide={!header} unstyled key="f_h_b" {...headerProps} {...sProps}>
      {header}
    </Label>,
    <Cmp
      {...sProps}
      animation={anim && "shake"}
      {...(error && {
        "data-mbx-fld-e": error,
      })}
      data-mbx-fld
      key="f_comp"
      className={className}
      value={fFunc(value)}
      shadow={shadow}
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
        const fValue = fFunc(newValue);

        if (!validate(fValue) || (required && !newValue)) {
          setError(true);
        } else {
          setError(false);
        }
        onChange(fValue);
        setValue(fValue);
      }}
    />,
    <Container
      {...sProps}
      animation="fade-in"
      hide={!error}
      background={false}
      key="f_eb"
      shadow={false}
    >
      {errorLabel}
    </Container>,
  ];
};

export default FrmComponent;
