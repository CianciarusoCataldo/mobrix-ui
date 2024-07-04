import React from "react";

import { PopupComponent } from "../../../types";

const popupComponent: PopupComponent = ({ className, children }) => (
  <div data-mbx-scl="flxc;pop-c;" className={className}>
    {children}
  </div>
);

export default popupComponent;
