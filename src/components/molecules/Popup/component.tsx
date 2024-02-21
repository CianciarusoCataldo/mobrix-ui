import React from "react";

import { PopupComponent } from "../../../types";

const popupComponent: PopupComponent = ({ className, children }) => (
  <div data-mbx-class="popup-content" className={className}>
    {children}
  </div>
);

export default popupComponent;
