import React from "react";

import {
  BuilderComponent,
  MoBrixUiComponent,
  PopupProps,
} from "../../../types";

const popupComponent: MoBrixUiComponent<PopupProps, BuilderComponent> = ({
  className,
  children,
}) => <div className={"popup-content " + className}>{children}</div>;

export default popupComponent;
