import React from "react";
import { EyeIcon } from "../../../icons";
import { MbxUiReactiveComponent } from "../../../types";
import IconButton from "../IconButton";
import Input from "../Input";
import { PasswordProps } from "../../../types/components/atoms/psw";

const PswC: MbxUiReactiveComponent<string, PasswordProps> = ({
  hover,
  background,
  active,
  dark,
  show = false,
  readOnly,
  placeholder,
  disabled,
  onChange,
  a11y,
}) => {
  const [hidden, hide] = React.useState(show);
  /* istanbul ignore next */
  React.useEffect(() => {
    if (show !== undefined && show !== null && hidden !== show) {
      hide(show);
    }
  }, [show]);
  const sProps = { a11y, background, active, dark, hover, disabled };
  return [
    <Input
      onChange={onChange}
      readOnly={readOnly}
      placeholder={placeholder}
      {...sProps}
      key="psw_in"
      props={{ type: hidden ? "password" : "text" }}
      shadow={false}
    />,
    <IconButton {...sProps} key="psw_bt" onClick={() => hide(!hidden)}>
      <EyeIcon width="30px" height="30px" show={!hidden} />
    </IconButton>,
  ];
};

export default PswC;
