import React from "react";

import { BuilderComponent, MoBrixUiComponent } from "../../../utils/global";
import { ModalProps } from "./types";

import Card from "../Card";
import Container from "../Container";

const modalComponent: MoBrixUiComponent<ModalProps, BuilderComponent> = ({
  children,
  unstyled,
  className,
  dark,
  title,
  hide,
  onClose,
  closeOutside,
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
      {unstyled ? (
        <Container
          unstyled
          style={{ width: "100%", height: "100%" }}
          onFocusLost={onFocusLostCallback}
        >
          {children}
        </Container>
      ) : (
        <Card
          className={"content " + className}
          dark={dark}
          hide={false}
          onClose={onClose}
          body={children}
          header={title}
          onFocusLost={onFocusLostCallback}
        />
      )}
    </div>
  );
};

export default modalComponent;
