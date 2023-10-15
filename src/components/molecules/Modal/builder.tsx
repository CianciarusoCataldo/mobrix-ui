import classNames from "classnames";
import React from "react";
import { BuilderProps, MoBrixUiComponent, ModalProps } from "../../../types";

import modalComponent from "./component";

const modalBuilder: MoBrixUiComponent<
  ModalProps,
  Omit<BuilderProps, "name">
> = ({
  children,
  className,
  onClose,
  closeOutside,
  overlayClassName,
  hide,
  ...commonProps
}) => {
    const [customClassName, setClassName] =
      React.useState<string>("component-hidden");

    return {
      Component: modalComponent({
        children,
        className,
        hide,
        ...commonProps,
      }),
      commonProps: {
        ...commonProps,
        hide,
        className: classNames(overlayClassName),
      },
    };
  };

export default modalBuilder;
