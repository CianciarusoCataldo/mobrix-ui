import React from "react";

import { ListProps } from "./types";

const component = ({ elements = [] }: ListProps) =>
  elements.map((element, index) => {
    return (
      <div className="internal-list-element" key={`element_${index}`}>
        <svg viewBox="0 0 9 9" className="dot">
          <circle cx={4.5} cy={4.5} r={3.5} />
        </svg>
        {element}
      </div>
    );
  });

export default component;
