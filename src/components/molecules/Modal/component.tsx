import React from "react";

import {
  BuilderComponent,
  MoBrixUiComponent,
  ModalProps,
} from "../../../types";

import DismissableCard from "../DismissableCard";

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
  onFocusLost = () => { },
}) => {

  /* istanbul ignore next */
  const onFocusLostCallback = () => {
    if (!hide) {
      onFocusLost();
      console.log("onFocusLost")

      closeOutside && onClose();
    }
  };

  return (
    <DismissableCard
      unstyled={unstyled}
      alwaysVisible
      noHeaderDivider
      additionalProps={{
        "data-mobrix-ui-class": "modal-window",
      }}
      className={className}
      dark={dark}
      hide={false}
      onFocusLost={onFocusLostCallback}
      noBackground
      onClose={onClose}
      animated={animated}
      body={children}
    />
  );
};

export default modalComponent;
