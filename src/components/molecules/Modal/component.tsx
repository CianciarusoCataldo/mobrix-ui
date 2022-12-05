import React from "react";

import { BuilderComponent, MoBrixUiComponent } from "../../../utils/global";
import { ModalProps } from "./types";

import Card from "../Card";

const modalComponent: MoBrixUiComponent<ModalProps, BuilderComponent> = ({
  children,
  unstyled,
  className,
  dark,
  title,
  hide,
  onClose = () => {},
  closeOutside,
  /* istanbul ignore next */
  onFocusLost = () => {},
}) => {
  /* istanbul ignore next */
  const onFocusLostCallback = () => {
    onFocusLost();
    closeOutside && onClose();
  };

  return (
    <div className="modal-window">
      {unstyled ? (
        children
      ) : (
        <Card
          className={"content " + className}
          dark={dark}
          unstyled={unstyled}
          onClose={onClose}
          body={children}
          dismissable
          header={title}
          hide={hide}
          onFocusLost={onFocusLostCallback}
        />
      )}
    </div>
  );
};

export default modalComponent;
