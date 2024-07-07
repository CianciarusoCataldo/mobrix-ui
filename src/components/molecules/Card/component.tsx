import React from "react";

import { MbxUiComponent, CardProps, BuilderComponent } from "../../../types";

import { Divider } from "../../atoms";

const cardComponent: MbxUiComponent<CardProps, BuilderComponent[]> = ({
  header,
  body,
  children,
  footer,
  dark,
  noDividers,
  noBottomDivider,
  noTopDivider,
  headerClassName,
  bodyClassName,
  footerClassName,
  headerProps = {},
  bodyProps = {},
  footerProps = {},
}) => [
  <div
    className={headerClassName}
    key="card_h"
    data-mbx-scl="cardc-head"
    {...(!header && { "data-mbx-atts": "hide" })}
    {...headerProps}
  >
    {header}
  </div>,
  <Divider
    hide={!header || noDividers || noTopDivider}
    size="1px"
    key="card_t_d"
    dark={dark}
    scl="top-divider"
  />,
  <div
    className={bodyClassName}
    data-mbx-scl="cardc-body"
    key="card_b"
    {...bodyProps}
  >
    {body}
  </div>,
  children,
  <Divider
    size="1px"
    key="card_b_d"
    dark={dark}
    hide={!footer || noDividers || noBottomDivider}
    scl="bottom-divider"
  />,
  <div
    className={footerClassName}
    key="card_f"
    data-mbx-scl="cardc-footer"
    {...(!footer && { "data-mbx-atts": "hide" })}
    {...footerProps}
  >
    {footer}
  </div>,
];

export default cardComponent;
