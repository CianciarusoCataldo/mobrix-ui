import React from "react";

import { PopupComponent } from "../../../types";
import Container from "../Container";

const popupComponent: PopupComponent = ({
  animated,
  className,
  children,
  scl = "",
}) => (
  <Container
    animated={animated}
    animation="fade-in"
    scl={`flxc;${scl}`}
    className={className}
  >
    {children}
  </Container>
);

export default popupComponent;
