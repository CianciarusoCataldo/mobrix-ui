import React from "react";

import { DismissableCardProps } from "../../../types/components";
import { BuilderComponent, MoBrixUiComponent } from "../../../types/global";

import { IconButton } from "../../atoms";
import { x_icon } from "../../../icons";

const headerComponent: MoBrixUiComponent<
  DismissableCardProps,
  BuilderComponent
> = ({
  header,
  disabled,
  dark,
  /* istanbul ignore next */
  onClose = () => {},
}) => (
  <div data-mbx-class="header-container">
    <div data-mbx-class="dismiss-container">
      <IconButton
        dark={dark}
        additionalProps={{
          "data-mbx-class": "dismiss-button",
        }}
        disabled={disabled}
        onClick={() => {
          onClose();
        }}
      >
        {x_icon}
      </IconButton>
    </div>
    {header && <div data-mbx-class="header-element">{header}</div>}
  </div>
);

export default headerComponent;
