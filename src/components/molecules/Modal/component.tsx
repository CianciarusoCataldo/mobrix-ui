import React from "react";

import { BuilderComponent, MoBrixUiComponent } from "../../../types/global";
import { ModalProps } from "../../../types/components/molecules";

import Card from "../Card";

const modalComponent: MoBrixUiComponent<ModalProps, BuilderComponent> = ({
  children,
  unstyled,
  className,
  dark,
  title,
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
      <Card
        className={"content " + className}
        dark={dark}
        hide={false}
        onClose={onClose}
        body={children}
        header={title}
        onFocusLost={onFocusLostCallback}
        unstyled={unstyled}
        animated={animated}
      />
    </div>
  );
};

export default modalComponent;
