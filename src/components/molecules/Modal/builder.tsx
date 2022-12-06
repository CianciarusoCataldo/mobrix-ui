import classNames from "classnames";
import React from "react";
import { BuilderProps, MoBrixUiComponent } from "../../../utils/global";
import modalComponent from "./component";
import { ModalProps } from "./types";

const modalBuilder: MoBrixUiComponent<
  ModalProps,
  Omit<BuilderProps, "name">
> = ({
  children,
  className,
  title,
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
      title,
      onClose:
        onClose &&
        (() => {
          setClassName("fade-out");
          onClose();
          /* istanbul ignore next */
          setTimeout(() => {
            setClassName("component-hidden");
          }, 300);
        }),
      closeOutside,
      hide,
      ...commonProps,
    }),
    commonProps: {
      ...commonProps,
      className: classNames(overlayClassName, {
        [customClassName]: hide,
      }),
    },
  };
};

export default modalBuilder;
