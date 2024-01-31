import React from "react";

import { DismissableCardProps } from "../../../types/components";
import { MobrixUiReactiveComponent } from "../../../types/global";

import { IconButton } from "../../atoms";
import { x_icon } from "../../../icons";

import cardComponent from "../Card/component";

const DismissableCardComponent: MobrixUiReactiveComponent<
  boolean,
  DismissableCardProps
> = ({
  children,
  noBottomDivider,
  noDividers,
  noTopDivider,
  setValue,
  body,
  footer,
  header,
  dark,
  /* istanbul ignore next */
  onClose = () => {},
  alwaysVisible,
  disabled,
}) =>
  cardComponent({
    children,
    noBottomDivider,
    noDividers,
    noTopDivider,
    dark,
    header: (
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
              !alwaysVisible && setValue(true);
            }}
          >
            {x_icon}
          </IconButton>
        </div>
        {header && <div data-mbx-class="header-element">{header}</div>}
      </div>
    ),
    body,
    footer,
  });

export default DismissableCardComponent;
