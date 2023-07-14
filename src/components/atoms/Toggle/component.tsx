import React from "react";

import { MobrixUiReactiveComponent, ToggleProps } from "mobrix-ui-types";

import classNames from "classnames";

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
