import React from "react";

import { DismissableCardProps } from "../../../types/components";
import { BuilderComponent, MoBrixUiComponent } from "../../../types/global";

import { IconButton } from "../../atoms";
import { x_icon } from "../../../icons";

import cardComponent from "../Card/component";

const DismissableCardInternalComponent: MoBrixUiComponent<
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
