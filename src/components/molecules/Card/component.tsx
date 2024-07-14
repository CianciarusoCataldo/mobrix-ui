import React from "react";

import { MbxUiComponent, CardProps, BuilderComponent } from "../../../types";

import { Divider } from "../../atoms";
import Container from "../Container";

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
  <Container
    dark={dark}
    unstyled
    className={headerClassName}
    key="card_h"
    mbxClass="cardc-head"
    hide={!header}
    props={headerProps}
  >
    {header}
  </Container>,
  <Divider
    hide={!header || noDividers || noTopDivider}
    size="1px"
    key="card_t_d"
    dark={dark}
  />,
  <Container
    dark={dark}
    unstyled
    className={bodyClassName}
    mbxClass="cardc-body"
    key="card_b"
    props={bodyProps}
  >
    {body}
  </Container>,
  children,
  <Divider
    size="1px"
    key="card_b_d"
    dark={dark}
    hide={!footer || noDividers || noBottomDivider}
  />,
  <Container
    dark={dark}
    unstyled
    className={footerClassName}
    key="card_f"
    mbxClass="cardc-footer"
    hide={!footer}
    props={footerProps}
  >
    {footer}
  </Container>,
];

export default cardComponent;
