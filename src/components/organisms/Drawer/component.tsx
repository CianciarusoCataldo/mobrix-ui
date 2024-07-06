import React from "react";

import { BuilderComponent, DrawerProps, MbxUiComponent } from "../../../types";

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
      debug={{
        scl: "drw-close",
      }}
      a11yLabel="drawer-close-button"
    >
      {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="37"
          viewBox="0 0 11 18"
        >
          <path d="M8.6812.1963l2.1208928 2.120293-8.484 8.4864L.1972 8.6827z" />
          <path d="M10.8032656 15.0470656l-2.1213 2.1213-8.4852-8.4852 2.1213-2.1213z" />
        </svg>
      }
    </IconButton>,
    <div key="drw_cont" data-mbx-scl="drw-cont">
      {children}
    </div>,
  ];
};

export default DrawerInternalComponent;
