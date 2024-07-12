import React from "react";

import { BuilderComponent, ListProps, MbxUiComponent } from "../../../types";

const listComponent: MbxUiComponent<ListProps, BuilderComponent[]> = ({
  elements = [],
  onClick,
  hover,
  disabled,
}) => {
  let fts = "";

  if (!disabled) {
    fts += "colFc;";
    if (onClick && hover) {
      fts += "opHov;";
    }
  }

  return elements.map((element, index) => (
    <div
      key={`el_${index}`}
      onClick={onClick && (() => onClick(index))}
      data-mbx-fts={fts}
      data-mbx-scl={`flxr;nout;lis-el;${onClick ? "click;" : ""}`}
      tabIndex={disabled ? -1 : 0}
    >
      <svg viewBox="0 0 9 9" key="lst_dot" data-mbx-scl="dot;myauto">
        <circle cx={4.5} cy={4.5} r={3.5} />
      </svg>
      <div key={"lst_el_" + index}>{element}</div>
    </div>
  ));
};

export default listComponent;
