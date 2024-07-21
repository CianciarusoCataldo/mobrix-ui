import React from "react";

import { BuilderComponent, DrawerProps, MbxUiComponent } from "../../../types";

import { ArrowIcon } from "../../../icons";

import IconButton from "../../atoms/IconButton";

const DrawerInternalComponent: MbxUiComponent<
  DrawerProps,
  BuilderComponent[]
> = ({
  hover,
  arrowClassName,
  dark,
  active,
  animated,
  disabled,
  children,
  onClose,
}) => {
  return [
    <IconButton
      hover={hover}
      className={arrowClassName}
      disabled={disabled}
      animated={animated}
      active={active}
      key="drw_bts_p"
      dark={dark}
      onClick={() => {
        onClose!();
      }}
      a11yLabel="drawer-close-button"
    >
      <ArrowIcon hover={hover} disabled={disabled} />
    </IconButton>,
    <div key="drw_cont">{children}</div>,
  ];
};

export default DrawerInternalComponent;
