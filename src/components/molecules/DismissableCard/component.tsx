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
      <div data-mbx-scl="flxc">
        <div data-mbx-scl="dis-cn;flxrr;">
          <IconButton
            dark={props.dark}
            debug={{
              scl: "dis-bt;flxrr",
              features: { fillOnFocus: true },
            }}
            disabled={props.disabled}
            onClick={() => {
              onClose();
            }}
          >
            {x_icon}
          </IconButton>
        </div>
        {header && <div data-mbx-scl="hd-el">{header}</div>}
      </div>
    ),
  });

export default DismissableCardInternalComponent;
