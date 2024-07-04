import React from "react";

import { DismissableCardProps } from "../../../types/components";
import { BuilderComponent, MbxUiComponent } from "../../../types/global";

import { IconButton } from "../../atoms";
import { x_icon } from "../../../icons";

import cardComponent from "../Card/component";

const DismissableCardInternalComponent: MbxUiComponent<
  DismissableCardProps,
  BuilderComponent[]
> = ({ onClose, header, ...props }) =>
  cardComponent({
    ...props,
    header: (
      <div data-mbx-class="header-container">
        <div data-mbx-class="dismiss-container">
          <IconButton
            dark={props.dark}
            additionalProps={{
              "data-mbx-class": "dismiss-button",
              "data-mbx-features": "opAct;noShFc;fillFc",
            }}
            disabled={props.disabled}
            onClick={() => {
              onClose();
            }}
          >
            {x_icon}
          </IconButton>
        </div>
        {header && <div data-mbx-class="header-element">{header}</div>}
      </div>
    ),
  });

export default DismissableCardInternalComponent;
