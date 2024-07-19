import React from "react";

import { DismissableCardProps } from "../../../types/components";
import { BuilderComponent, MbxUiComponent } from "../../../types/global";

import { IconButton } from "../../atoms";
import { Xicon } from "../../../icons";

import cardComponent from "../Card/component";

const DismissableCardInternalComponent: MbxUiComponent<
  DismissableCardProps,
  BuilderComponent[]
> = ({ onClose, header, ...props }) =>
  cardComponent({
    ...props,
    header: [
      <IconButton
        dark={props.dark}
        features={{ noShFc: true }}
        disabled={props.disabled}
        onClick={onClose}
        key="dis-x"
      >
        <Xicon hover={props.hover} disabled={props.disabled} />
      </IconButton>,
      <div key="dis-h">{header}</div>,
    ],
  });

export default DismissableCardInternalComponent;
