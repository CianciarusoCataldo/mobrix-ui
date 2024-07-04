import React from "react";

import { BuilderComponent, ListProps, MbxUiComponent } from "../../../types";

const listComponent: MbxUiComponent<ListProps, BuilderComponent[]> = ({
  elements = [],
  onClick,
  hover,
  disabled,
}) => {
  let features = "";

  if (!disabled) {
    features += "colFc;";
    if (onClick && hover) {
      features += "opHov;";
    }
  }

  return elements.map((element, index) => (
    <div
      key={`element_${index}`}
      onClick={onClick && (() => onClick(index))}
      data-mbx-features={features}
      data-mbx-scl="flxr"
      data-mbx-list-element={onClick ? "clickable" : ""}
      tabIndex={0}
    >
      <svg viewBox="0 0 9 9" key="list_dot" data-mbx-class="dot">
        <circle cx={4.5} cy={4.5} r={3.5} />
      </svg>
      <div key={"list_element_" + index}>{element}</div>
    </div>
  ));
};

export default listComponent;
