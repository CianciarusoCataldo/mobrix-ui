import React from "react";

import { BuilderComponent, MoBrixUiComponent } from "../../../utils/global";
import Container from "../Container";

import { ListProps } from "./types";

const listComponent: MoBrixUiComponent<ListProps, BuilderComponent[]> = ({
  elements = [],
  dark,
  a11yDark,
  a11y,
}) =>
  elements.map((element, index) => {
    return (
      <Container
        className="internal-list-element"
        key={`element_${index}`}
        unstyled
        dark={dark}
        a11y={a11y}
        a11yDark={a11yDark}
      >
        <svg viewBox="0 0 9 9" className="dot">
          <circle cx={4.5} cy={4.5} r={3.5} />
        </svg>
        {element}
      </Container>
    );
  });

export default listComponent;
