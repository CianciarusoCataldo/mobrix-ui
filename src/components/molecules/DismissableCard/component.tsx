import React from "react";

import { DismissableCardProps } from "../../../types/components";
import { MobrixUiReactiveComponent } from "../../../types/global";

import { Button } from "../../atoms";
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
  onClose = () => {},
  alwaysVisible,
  disabled,
}) =>
  cardComponent({
    children,
    noBottomDivider,
    noDividers,
    noTopDivider,
    header: (
      <div data-mbx-class="header-container">
        <div data-mbx-class="dismissable-card-dismiss-container">
          <Button
            dark={dark}
            unstyled
            additionalProps={{
              "data-mbx-class": "card-dismiss-button",
              "data-mbx-test": "card_dismiss_button",
            }}
            disabled={disabled}
            onClick={() => {
              onClose();
              !alwaysVisible && setValue(true);
            }}
          >
            {x_icon}
          </Button>
        </div>
        {header && <div data-mbx-class="header-element">{header}</div>}
      </div>
    ),
    body,
    footer,
  });

export default DismissableCardComponent;
