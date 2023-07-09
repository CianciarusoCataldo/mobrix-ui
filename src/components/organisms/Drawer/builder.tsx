import React from "react";

import { DrawerProps } from "../../../types/components/organisms";
import { BuilderProps, MoBrixUiComponent } from "../../../types/global";

import classNames from "classnames";

import drawerComponent from "./component";

const ALLOWED_POSITIONS = [
  "right",
  "left",
  "top",
  "bottom",
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
];

const DrawerBuilder: MoBrixUiComponent<
  DrawerProps,
  Omit<BuilderProps, "name">
> = ({
  children,
  hide,
  className,
  position,
  onClose = () => {},
  ...commonProps
}) => {
  const drawerLocation =
    position && ALLOWED_POSITIONS.includes(position) ? position : "left";

  const [drawerClassName, setClassName] = React.useState<string>("");

  return {
    commonProps: {
      ...commonProps,
      className: classNames(
        drawerLocation,
        {
          "ease-in": !hide,
          [drawerClassName]: hide,
        },
        className
      ),
      hide: drawerClassName.length === 0 && hide,
    },
    Component: drawerComponent({
      children,
      hide,
      onClose: () => {
        setClassName("ease-out");
        onClose();
      },
      ...commonProps,
    }),
  };
};

export default DrawerBuilder;
