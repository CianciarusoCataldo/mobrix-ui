import "./styles.css";

import { PopupComponent } from "../../../types";

import {
  buildMbxStandardComponent,
  buildMobrixUiStandardComponent,
} from "../../../tools";

import popupComponent from "./component";

/**
 * MBX_DESCRIPTION
 *
 * MBX_PROPS
 *
 * @example MBX_EXAMPLE
 *
 * @since MBX_SINCE
 *
 * @author MBX_AUTHOR
 *
 * @copyright MBX_COPYRIGHT
 */
const Popup: PopupComponent = ({ children, ...commonProps }) =>
  buildMbxStandardComponent(commonProps, (props) => ({
    name: "popup",
    commonProps: { ...props, className: "" },
    Component: popupComponent({ ...props, children }),
  }));

export default Popup;
