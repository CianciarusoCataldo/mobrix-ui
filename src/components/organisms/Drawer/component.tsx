import React from "react";

import { BuilderComponent, DrawerProps, MbxUiComponent } from "../../../types";

import { locationCss } from "./constants";

import { ArrowIcon } from "../../../icons";

import IconButton from "../../atoms/IconButton";

const DrawerInternalComponent: MbxUiComponent<
  DrawerProps,
  BuilderComponent[]
> = ({
  onClose,
  children,
  dark,
  animated,
  disabled,
  hover,
  arrowClassName,
  position,
}) => {
  return [
    <IconButton
      hover={hover}
      className={arrowClassName}
      disabled={disabled}
      animated={animated}
      key="drw_bts_p"
      dark={dark}
      onClick={() => {
        onClose!();
      }}
      scl={locationCss[position].btn}
      features={{ noShFc: true }}
      a11yLabel="drawer-close-button"
    >
      <ArrowIcon hover={hover} />
    </IconButton>,
    <div key="drw_cont">{children}</div>,
  ];
};

export default DrawerInternalComponent;
