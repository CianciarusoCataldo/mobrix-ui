import React from "react";

import { ListProps } from "./types";

import { BuilderComponent, MoBrixUiComponent } from "../../../utils/global";
import Button from "../../atoms/Button";

const listComponent: MoBrixUiComponent<ListProps, BuilderComponent[]> = ({
  elements = [],
  onChange,
}) => {
  let Wrapper: ({ children }: any) => JSX.Element = ({ children }) => (
    <div className="internal-list-element" tabIndex={0}>
      {children}
    </div>
  );

  if (onChange) {
    Wrapper = ({ children, index }) => (
      <Button
        className="internal-list-element clickable-list-element"
        unstyled
        onClick={() => onChange(Number(index))}
      >
        {children}
      </Button>
    );
  }
  return elements.map((element, index) => {
    return (
      <Wrapper key={`element_${index}`} index={index}>
        <svg viewBox="0 0 9 9" key="list_dot" className="dot">
          <circle cx={4.5} cy={4.5} r={3.5} />
        </svg>
        <div key={"list_element_" + index}>{element}</div>
      </Wrapper>
    );
  });
};
export default listComponent;
