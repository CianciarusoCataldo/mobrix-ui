import React from "react";

import {
  BuilderComponent,
  MoBrixUiComponent,
  PopupProps,
} from "../../../types";

const popupComponent: MoBrixUiComponent<PopupProps, BuilderComponent> = ({
  className,
  children,
}) => (
  <div data-mbx-class="popup-content" className={className}>
    {children}
  </div>
);

export default popupComponent;
