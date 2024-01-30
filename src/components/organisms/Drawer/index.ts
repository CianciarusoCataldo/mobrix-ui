import React from "react";

import "./styles.css";

import { DrawerComponent } from "../../../types";

import { buildMobrixUiStandardComponent } from "../../../tools";

import drawerComponent from "./component";
import { buildMbxStandardComponent } from "../../../tools/utils";

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

/**
 * MBX_DESCRIPTION
 *
 * MBX_PROPS
 *
 * @example MBX_EXAMPLE
 *
 * @since MBX_SINCE
 *
 * @author MBX_AUTHOR
 *
 * @copyright MBX_COPYRIGHT
 */
const Drawer: DrawerComponent = ({
  position,
  hide,
  animated,
  children,
  additionalProps = {},
  onClose = () => {},
  onFocusLost = () => {},
  ...commonProps
}) => {
  const drawerLocation =
    position && ALLOWED_POSITIONS.includes(position) ? position : "left";

  const [value, setValue] = React.useState("");

  const onCloseCallback = () => {
    setValue("ease-out");
    setTimeout(() => {
      setValue("");
      onClose();
    }, 200);
  };

  return buildMbxStandardComponent(commonProps, (props) => ({
    name: "drawer",
    commonProps: {
      ...props,
      hide: value.length === 0 && hide,
      /* istanbul ignore next */
      onFocusLost: () => {
        if (!hide) {
          onFocusLost();
          onCloseCallback();
        }
      },
    },
    additionalProps: {
      ...additionalProps,
      "data-mbx-drawer-location": drawerLocation,
      "data-mbx-drawer-animation":
        value.length === 0 ? (hide ? "" : "ease-in") : value,
    },
    Component: drawerComponent({
      children,
      hide,
      onClose: onCloseCallback,
      ...props,
    }),
  }));
};

export default Drawer;
