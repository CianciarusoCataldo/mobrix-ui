import React from "react";

import { BuilderComponent, MoBrixUiComponent } from "../../../types/global";
import { PopupProps } from "../../../types/components/molecules/Popup";

const popupComponent: MoBrixUiComponent<PopupProps, BuilderComponent> = ({
  className,
  children,
}) => <div className={"popup-content " + className}>{children}</div>;

export default popupComponent;
