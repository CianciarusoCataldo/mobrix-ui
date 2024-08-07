import React from "react";

import { PopupComponent } from "../../../types";
import Container from "../Container";

const ppComponent: PopupComponent = ({
  animated,
  className,
  children,
  background,
  dark,
  hover,
  shadow,
  a11y,
}) => (
  <Container
    a11y={a11y}
    animated={animated}
    animation="fade-in"
    className={className}
    background={background}
    dark={dark}
    hover={hover}
    shadow={shadow}
  >
    {children}
  </Container>
);

export default ppComponent;
