import React from "react";

import "./styles.css";

import { DismissableCardComponent } from "mobrix-ui-types";

import { buildMobrixUiReactiveComponent } from "mobrix-ui-tools";

import { xIcon } from "./icons";
import { Button } from "../../atoms";
import cardComponent from "../Card/component";

const DismissableCard: DismissableCardComponent = ({
  onClose,
  noFooterDivider,
  noDividers,
  noHeaderDivider,
  header,
  body,
  footer,
  hide,
  icon,
  children,
  ...commonProps
}) =>
  buildMobrixUiReactiveComponent({
    name: "dismissable-card",
    inputValue: hide,
    defaultValue: false,
    Component: ({ value, setValue }) =>
      cardComponent({
        icon,
        children,
        noFooterDivider,
        noDividers,
        noHeaderDivider,
        header: (
          <div className="header-container">
            <Button
              dark={commonProps.dark}
              unstyled
              className="card-dismiss-button"
              onClick={() => setValue(true)}
            >
              {xIcon}
            </Button>
            <div className="header-element">{header}</div>
          </div>
        ),
        body,
        footer,
      }),
    props: (value, setValue) => ({
      commonProps: { ...commonProps, hide: value },
    }),
  });

export default DismissableCard;
