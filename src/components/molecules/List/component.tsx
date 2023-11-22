import React from "react";

import { BuilderComponent, ListProps, MoBrixUiComponent } from "../../../types";

import Button from "../../atoms/Button";

const listComponent: MoBrixUiComponent<ListProps, BuilderComponent[]> = ({
  elements = [],
  onClick,
}) => {
  let Wrapper: ({ children }: any) => JSX.Element = ({ children }) => (
    <div data-mobrix-ui-list-element="" tabIndex={0}>
      {children}
    </div>
  );

  if (onClick) {
    Wrapper = ({ children, index }) => (
      <Button
        additionalProps={{
          "data-mobrix-ui-list-element": "clickable",
          "data-mobrix-ui-test": "list_element_" + index
        }}
        unstyled
        onClick={() => onClick(Number(index))}
      >
        {children}
      </Button>
    );
  }
  return elements.map((element, index) => (
    <Wrapper key={`element_${index}`} index={index}>
      <svg viewBox="0 0 9 9" key="list_dot" data-mobrix-ui-class="dot">
        <circle cx={4.5} cy={4.5} r={3.5} />
      </svg>
      <div key={"list_element_" + index}>{element}</div>
    </Wrapper>
  ));
};
export default listComponent;
