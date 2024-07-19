import React from "react";

import { PopupComponent } from "../../../types";
import Container from "../Container";

const popupComponent: PopupComponent = ({
  animated,
  className,
  children,
}) => (
  <Container
    animated={animated}
    animation="fade-in"
    className={className}
  >
    {children}
  </Container>
);

export default popupComponent;
