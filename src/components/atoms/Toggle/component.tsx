import classNames from "classnames";
import React from "react";
import { MobrixUiReactiveComponent } from "../../../utils/global";
import { defaultIcon } from "./icons";
import { ToggleProps } from "./types";

const component: MobrixUiReactiveComponent<ToggleProps> = ({
  value: status,
  setValue: setStatus,
  icon,
  offIcon,
  onIcon,
  shadow,
  className,
  onChange,
  ...commonProps
}) => {
  const toggleIcon = icon || defaultIcon;
  const iconOn = onIcon || toggleIcon;
  const iconOff = offIcon || toggleIcon;
  return {
    commonProps: {
      ...commonProps,
      className: classNames("container", className, {
        off: !status,
        shadowed: shadow,
      }),
    },
    additionalProps: {
      onClick: () => {
        onChange && onChange(!status);
        setStatus(!status);
      },
    },
    Component: (
      <div
        className={classNames("toggle-icon", {
          flip: !status,
          "flip-back": status,
        })}
      >
        {status === true ? iconOn : iconOff}
      </div>
    ),
  };
};

export default component;
