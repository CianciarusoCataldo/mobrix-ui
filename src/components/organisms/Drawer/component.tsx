import React from "react";

import { BuilderComponent, DrawerProps, MbxUiComponent } from "../../../types";

import { ArrowIcon } from "../../../icons";

import IconButton from "../../atoms/IconButton";

const DrwComponent: MbxUiComponent<DrawerProps, BuilderComponent[]> = ({
  hover,
  arrowClassName,
  dark,
  active,
  animated,
  disabled,
  children,
  onClose,
  a11y,
}) => {
  return [
    <IconButton
      a11y={a11y}
      className={arrowClassName}
      disabled={disabled}
      animated={animated}
      active={active}
      key="drw_bts_p"
      onClick={() => {
        onClose!();
      }}
      hover={hover}
      dark={dark}
      a11yLabel="drawer-close-button"
    >
      <ArrowIcon disabled={disabled} />
    </IconButton>,
    <div key="drw_cont">{children}</div>,
  ];
};

export default DrwComponent;
