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
      data-mbx-class="toggle-icon"
      {...(!disabled &&
        hover && {
          "data-mbx-features": `opHov;flip${status}`,
        })}
    >
      {status === true ? iconOn : iconOff}
    </div>
  );
};

export default toggleComponent;
