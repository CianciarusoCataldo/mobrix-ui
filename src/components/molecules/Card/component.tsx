import React from "react";

import { MbxUiComponent, CardProps, BuilderComponent } from "../../../types";

import { Divider } from "../../atoms";
import Container from "../Container";

const component: MbxUiComponent<CardProps, BuilderComponent[]> = ({
  children,
  dark,
  headerProps = {},
  bodyProps = {},
  footerProps = {},
  dividerSize = "1px",
  header,
  headerClassName,
  noBottomDivider,
  noDividers,
  noTopDivider,
  body,
  bodyClassName,
  footer,
  footerClassName,
}) => [
  <Container
    dark={dark}
    unstyled
    className={headerClassName}
    key="card_h"
    hide={!header}
    props={headerProps}
  >
    {header}
  </Container>,
  <Divider
    hide={!header || noDividers || noTopDivider}
    size={dividerSize}
    key="card_t_d"
    dark={dark}
  />,
  <Container
    dark={dark}
    unstyled
    className={bodyClassName}
    data-mbx-cbody=""
    key="card_b"
    props={bodyProps}
  >
    {body}
  </Container>,
  children,
  <Divider
    size={dividerSize}
    key="card_b_d"
    dark={dark}
    hide={!footer || noDividers || noBottomDivider}
  />,
  <Container
    dark={dark}
    unstyled
    className={footerClassName}
    key="card_f"
    hide={!footer}
    props={footerProps}
  >
    {footer}
  </Container>,
];

export default component;
