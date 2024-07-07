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
    hide={!body || !header || noDividers || noTopDivider}
    size="1px"
    key="card_t_d"
    dark={dark}
    debug={{
      scl: "top-divider",
    }}
  />,
  <div
    className={bodyClassName}
    data-mbx-scl="cardc-body"
    key="card_b"
    {...(!body && { "data-mbx-atts": "hide" })}
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
    debug={{
      scl: "bottom-divider",
    }}
  />,
  <div
    className={footerClassName}
    key="card_f"
    data-mbx-scl="cardc-footer"
    {...footerProps}
  >
    {footer}
  </div>,
];

export default cardComponent;
