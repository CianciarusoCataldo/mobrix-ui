import React from "react";

import { MobrixUiReactiveComponent } from "../../../types/global";

import classNames from "classnames";

import { defaultIcon } from "./icons";
import { ToggleProps } from "../../../types/components/atoms";

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
