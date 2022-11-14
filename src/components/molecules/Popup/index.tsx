import "./styles.css";
import React from "react";
import { buildComponent } from "../../../utils";
import { PopupComponent } from "./types";

const Popup: PopupComponent = ({
  children,
  className = "",
  ...commonProps
}) => {
  return buildComponent({
    name: "mobrix-ui-popup",
    commonProps,
    Component: <div className={"popup-content " + className}>{children}</div>,
  });
};

export default Popup;
