import React from "react";

import { BuilderComponent, MoBrixUiComponent } from "../../../utils/global";

import { ListProps } from "./types";

const component: MoBrixUiComponent<ListProps, BuilderComponent[]> = ({
  elements = [],
}) =>
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
