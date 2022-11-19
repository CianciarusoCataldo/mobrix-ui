import React from "react";

import { MobrixUiReactiveComponent } from "../../../utils/global";

import classNames from "classnames";

import { defaultIcon } from "./icons";
import { ToggleProps } from "./types";

const toggleComponent: MobrixUiReactiveComponent<boolean, ToggleProps> = ({
  value: status,
  icon,
  offIcon,
  onIcon,
}) => {
  const toggleIcon = icon || defaultIcon;
  const iconOn = onIcon || toggleIcon;
  const iconOff = offIcon || toggleIcon;
  return (
    <div
      className={classNames("toggle-icon", {
        flip: !status,
        "flip-back": status,
      })}
    >
      {status === true ? iconOn : iconOff}
    </div>
  );
};

export default toggleComponent;
