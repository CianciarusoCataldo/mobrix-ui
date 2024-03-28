import React from "react";

import { BuilderComponent, MbxUiComponent, ModalProps } from "../../../types";

import DismissableCard from "../DismissableCard";

const modalComponent: MbxUiComponent<ModalProps, BuilderComponent> = ({
  children,
  className,
  dark,
  hide,
  onClose,
  closeOutside,
  animated,
  disabled,
  /* istanbul ignore next */
  onFocusLost = () => {},
}) => {
  /* istanbul ignore next */
  const onFocusLostCallback = () => {
    if (!hide) {
      onFocusLost();
      closeOutside && onClose();
    }
  };

  return (
    <DismissableCard
      disabled={disabled}
      alwaysVisible
      noTopDivider
      additionalProps={{
        "data-mbx-class": "modal-window",
      }}
      className={className}
      dark={dark}
      hide={false}
      onFocusLost={onFocusLostCallback}
      background={false}
      shadow={false}
      onClose={onClose}
      animated={animated}
      body={children}
    />
  );
};

export default modalComponent;
