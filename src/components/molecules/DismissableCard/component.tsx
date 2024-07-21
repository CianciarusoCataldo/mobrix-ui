import React from "react";

import { DismissableCardProps } from "../../../types/components";
import { BuilderComponent, MbxUiComponent } from "../../../types/global";

import { IconButton } from "../../atoms";
import { Xicon } from "../../../icons";

import cardComponent from "../Card/component";

const DismissableCardInternalComponent: MbxUiComponent<
  DismissableCardProps,
  BuilderComponent[]
> = ({ onClose, header, dark, disabled, active, hover, ...props }) =>
  cardComponent({
    ...props,
    header: [
      <IconButton
        hover={hover}
        dark={dark}
        disabled={disabled}
        active={active}
        onClick={onClose}
        key="dis-x"
      >
        <Xicon dark={dark} hover={hover} disabled={disabled} />
      </IconButton>,
      <div key="dis-h">{header}</div>,
    ],
  });

export default DismissableCardInternalComponent;
