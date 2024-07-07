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
      key={`el_${index}`}
      onClick={onClick && (() => onClick(index))}
      data-mbx-fts={features}
      data-mbx-scl={`flxr;nout;lis-el;${onClick ? "click;" : ""}`}
      tabIndex={0}
    >
      <svg viewBox="0 0 9 9" key="lst_dot" data-mbx-scl="dot">
        <circle cx={4.5} cy={4.5} r={3.5} />
      </svg>
      <div key={"lst_el_" + index}>{element}</div>
    </div>
  ));
};

export default listComponent;
