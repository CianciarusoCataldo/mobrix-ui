import React from "react";

import { MbxUiComponent, CardProps, BuilderComponent } from "../../../types";

import { Divider } from "../../atoms";
import Container from "../Container";

const component: MbxUiComponent<CardProps, BuilderComponent[]> = ({
  children,
  dark,
  headerProps,
  bodyProps,
  footerProps,
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
  a11y,
}) => {
  const sPrp = { dark, unstyled: true, a11y };
  return [
    <Container
      {...sPrp}
      className={headerClassName}
      key="c_h"
      hide={!header}
      props={headerProps}
    >
      {header}
    </Container>,
    <Divider
      hide={!header || noDividers || noTopDivider}
      size={dividerSize}
      key="c_t_d"
      dark={dark}
    />,
    <Container
      {...sPrp}
      className={bodyClassName}
      data-mbx-cbody=""
      key="c_b"
      props={bodyProps}
    >
      {body}
    </Container>,
    children,
    <Divider
      size={dividerSize}
      key="c_b_d"
      dark={dark}
      hide={!footer || noDividers || noBottomDivider}
    />,
    <Container
      {...sPrp}
      className={footerClassName}
      key="c_f"
      hide={!footer}
      props={footerProps}
    >
      {footer}
    </Container>,
  ];
};

export default component;
