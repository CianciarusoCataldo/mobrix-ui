import React from "react";

import { BuilderComponent, ListProps, MbxUiComponent } from "../../../types";

const listComponent: MbxUiComponent<ListProps, BuilderComponent[]> = ({
  elements = [],
  onClick,
  hover,
  disabled,
}) => {
  let fts = `${!disabled && "colFc"};${onClick && hover && "opHov"}`;

  return elements.map((element, index) => {
    const callback = onClick && (() => onClick(index));

    return (
      <div
        key={`el_${index}`}
        {...(callback && {
          onClick: callback,
          onKeyDown: (e) => {
            if (e.code === "Enter") {
              callback();
            }
          },
        })}
        data-mbx-fts={fts}
        data-mbx-scl={`flxr;nout;lis-el;${onClick ? "click;" : ""}`}
        tabIndex={disabled ? -1 : 0}
      >
        <svg viewBox="0 0 9 9" key="lst_dot" data-mbx-scl="dot;myauto">
          <circle cx={4.5} cy={4.5} r={3.5} />
        </svg>
        <div key={"lst_el_" + index}>{element}</div>
      </div>
    );
  });
};

export default listComponent;
