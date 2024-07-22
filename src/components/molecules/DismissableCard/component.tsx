import React from "react";

import { DismissableCardProps } from "../../../types/components";
import { BuilderComponent, MbxUiComponent } from "../../../types/global";

import { IconButton } from "../../atoms";
import { Xicon } from "../../../icons";

import card from "../Card/component";

const Component: MbxUiComponent<DismissableCardProps, BuilderComponent[]> = ({
  onClose,
  header,
  dark,
  disabled,
  active,
  hover,
  ...props
}) =>
  card({
    ...props,
    header: [
      <IconButton
        dark={dark}
        hover={hover}
        disabled={disabled}
        active={active}
        onClick={onClose}
        key="dis-x"
      >
        <Xicon />
      </IconButton>,
      <div key="dis-h">{header}</div>,
    ],
  });

export default Component;
