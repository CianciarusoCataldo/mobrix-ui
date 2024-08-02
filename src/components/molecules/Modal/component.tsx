import React from "react";

import { BuilderComponent, MbxUiComponent, ModalProps } from "../../../types";

import Card from "../Card";
import DismissableCard from "../DismissableCard";

const mdComponent: MbxUiComponent<ModalProps, BuilderComponent> = ({
  children,
  disabled,
  className,
  dark,
  onClose,
  animated,
  hover,
}) => {
  const cProps = {
    hover,
    disabled,
    noDividers: true,
    className,
    dark: dark,
    hide: false,
    background: false,
    shadow: false,
    animated,
    body: children,
  };
  return onClose ? (
    <DismissableCard alwaysVisible onClose={onClose} {...cProps} />
  ) : (
    <Card {...cProps} />
  );
};

export default mdComponent;
