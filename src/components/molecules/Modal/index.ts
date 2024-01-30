import "./styles.css";

import { ModalComponent } from "../../../types";

import { buildMobrixUiStandardComponent } from "../../../tools";

import modalComponent from "./component";
import React from "react";

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
const Modal: ModalComponent = ({
  children,
  closeOutside,
  additionalProps = {},
  onClose = () => {},
  hide,
  ...commonProps
}) => {
  const [value, setValue] = React.useState("");

  const onCloseCallback = () => {
    setValue("ease-out");
    setTimeout(() => {
      setValue("");
      onClose();
    }, 200);
  };

  return buildMobrixUiStandardComponent({
    name: "modal",
    Component: modalComponent({
      children,
      closeOutside,
      onClose: onCloseCallback,
      hide,
      ...commonProps,
    }),
    commonProps: {
      ...commonProps,
      hide: value.length === 0 && hide,
    },
    additionalProps: {
      ...additionalProps,
      "data-mbx-modal-animation":
        value.length === 0 ? (hide ? "" : "ease-in") : value,
    },
  });
};

export default Modal;
