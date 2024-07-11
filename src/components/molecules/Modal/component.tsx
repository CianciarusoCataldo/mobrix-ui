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
}) => (
  <DismissableCard
    disabled={disabled}
    alwaysVisible
    noTopDivider
    className={className}
    dark={dark}
    hide={false}
    onFocusLost={
      /* istanbul ignore next */
      () => {
        if (!hide) {
          onFocusLost();
          closeOutside && onClose();
        }
      }
    }
    background={false}
    shadow={false}
    onClose={onClose}
    animated={animated}
    body={children}
    scl="flxc"
  />
);

export default modalComponent;
