import { MobrixUiReactiveComponentBuilder, ToggleProps } from "mobrix-ui-types";

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
    commonProps: {
      ...commonProps,
      className: classNames("container", className, {
        off: !status,
      }),
    },
  };
};

export default toggleComponentBuilder;
