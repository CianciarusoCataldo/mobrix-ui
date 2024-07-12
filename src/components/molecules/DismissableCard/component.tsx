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
      <div data-mbx-scl="dis-cn;flxrr;wfu" key="dis-x">
        <IconButton
          dark={props.dark}
          features={{ fillFc: true, noShFc: true }}
          scl="dis-bt;flxrr;wfit"
          disabled={props.disabled}
          onClick={onClose}
        >
          <Xicon fill="var(--mbx-c-dcard-x)" />
        </IconButton>
      </div>,
      <div data-mbx-scl="cardc-head" key="dis-h">
        {header}
      </div>,
    ],
  });

export default DismissableCardInternalComponent;
