import { MobrixUiReactiveComponentBuilder } from "../../../utils/global";

import classNames from "classnames";

import { ToggleProps } from "./types";
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
  onChange,
  ...commonProps
}) => {
  return {
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
