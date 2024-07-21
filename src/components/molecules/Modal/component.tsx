import React from "react";

import { BuilderComponent, MbxUiComponent, ModalProps } from "../../../types";

import DismissableCard from "../DismissableCard";

const modalComponent: MbxUiComponent<ModalProps, BuilderComponent> = ({
  children,
  /* istanbul ignore next */
  onFocusLost = () => {},
  disabled,
  className,
  hide,
  dark,
  closeOutside,
  onClose,
  animated,
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
  />
);

export default modalComponent;
