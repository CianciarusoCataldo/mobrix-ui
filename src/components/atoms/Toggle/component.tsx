import React from "react";

import { MbxUiReactiveComponent, ToggleProps } from "../../../types";

import { defaultIcon } from "./icons";

const toggleComponent: MbxUiReactiveComponent<boolean, ToggleProps> = ({
  value: status,
  icon = defaultIcon,
  offIcon,
  onIcon,
  disabled,
  hover,
}) => {
  const iconOn = onIcon || icon;
  const iconOff = offIcon || icon;

  return (
    <div
      data-mbx-flip={status}
      data-mbx-class="toggle-icon"
      data-mbx-opacityhover={!disabled && hover}
    >
      {status === true ? iconOn : iconOff}
    </div>
  );
};

export default toggleComponent;
