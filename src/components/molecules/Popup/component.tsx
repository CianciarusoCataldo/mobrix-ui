import React from "react";

import { PopupComponent } from "../../../types";
import Container from "../Container";

const popupComponent: PopupComponent = ({
  animated,
  className,
  children,
  background,
  dark,
  hover,
}) => (
  <Container
    animated={animated}
    animation="fade-in"
    className={className}
    background={background}
    dark={dark}
    hover={hover}
  >
    {children}
  </Container>
);

export default popupComponent;
