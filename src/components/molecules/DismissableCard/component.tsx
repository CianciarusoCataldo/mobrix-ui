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
        features={{ fillFc: true, noShFc: true }}
        scl="flxrr;wfit"
        data-mbx-cls="dis-bt"
        disabled={props.disabled}
        onClick={onClose}
        key="dis-x"
      >
        <Xicon fill="var(--mbx-c-dcard-x)" />
      </IconButton>,
      <div data-mbx-cls="cardc" key="dis-h">
        {header}
      </div>,
    ],
  });

export default DismissableCardInternalComponent;
