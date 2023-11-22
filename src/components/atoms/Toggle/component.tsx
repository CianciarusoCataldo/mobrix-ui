import React from "react";

import { MobrixUiReactiveComponent, ToggleProps } from "../../../types";

import { defaultIcon } from "./icons";

const toggleComponent: MobrixUiReactiveComponent<boolean, ToggleProps> = ({
  value: status,
  icon = defaultIcon,
  offIcon,
  onIcon,
}) => {
  const iconOn = onIcon || icon;
  const iconOff = offIcon || icon;

  return (
    <div
      data-mobrix-ui-flip={status}
      data-mobrix-ui-class="toggle-icon"
    >
      {status === true ? iconOn : iconOff}
    </div>
  );
};

export default toggleComponent;
