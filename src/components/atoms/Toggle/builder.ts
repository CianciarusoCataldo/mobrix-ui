import { MobrixUiReactiveComponentBuilder } from "../../../utils/global";

import { ToggleProps } from "./types";

import classNames from "classnames";

import toggleComponent from "./component";

const toggleComponentBuilder: MobrixUiReactiveComponentBuilder<
  boolean,
  ToggleProps
> = ({
  value: status,
  setValue: setStatus,
  icon,
  offIcon,
  onIcon,
  className,
  onChange = () => {},
  ...commonProps
}) => {
  return {
    additionalProps: {
      onClick: () => {
        onChange(!status);
        setStatus(!status);
      },
      onKeyDown: (e) => {
        if (e.code === "Enter") {
          onChange(!status);
          setStatus(!status);
        }
      },
    },
    Component: toggleComponent({
      value: status,
      setValue: setStatus,
      icon,
      offIcon,
      onIcon,
    }),
    commonProps: {
      ...commonProps,
      className: classNames("container", className, {
        off: !status,
      }),
    },
  };
};

export default toggleComponentBuilder;
