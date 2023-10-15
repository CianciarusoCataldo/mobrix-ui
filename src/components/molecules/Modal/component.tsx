import React from "react";

import {
  BuilderComponent,
  MoBrixUiComponent,
  ModalProps,
} from "../../../types";

import Card from "../Card";
import Container from "../Container";

const modalComponent: MoBrixUiComponent<ModalProps, BuilderComponent> = ({
  children,
  unstyled,
  className,
  dark,
  hide,
  onClose,
  closeOutside,
  animated,
  /* istanbul ignore next */
  onFocusLost = () => {},
}) => {
  /* istanbul ignore next */
  const onCloseCallback = onClose ? onClose : () => {};

  /* istanbul ignore next */
  const onFocusLostCallback = () => {
    if (!hide) {
      onFocusLost();
      closeOutside && onCloseCallback();
    }
  };

  return (
    <div className="modal-window">
      <Container
        className={"content " + className}
        dark={dark}
        hide={false}
        onFocusLost={onFocusLostCallback}
        unstyled={unstyled}
        animated={animated}
      >{children}</Container>
    </div>
  );
};

export default modalComponent;
