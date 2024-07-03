import React from "react";

import { BuilderComponent, ListProps, MbxUiComponent } from "../../../types";

const listComponent: MbxUiComponent<ListProps, BuilderComponent[]> = ({
  elements = [],
  onClick,
  hover,
  disabled,
}) => {
  let features = "";
  let props = {
    "data-mbx-list-element": "",
  };

  if (!disabled) {
    features += "colFc;";
    if (onClick) {
      props["onClick"] = onClick;
      props["data-mbx-list-element"] = "clickable";
      if (hover) {
        features += "opHov;";
      }
    }
  }

  return elements.map((element, index) => (
    <div
      key={`element_${index}`}
      data-mbx-features={features}
      tabIndex={0}
      {...props}
    >
      <svg viewBox="0 0 9 9" key="list_dot" data-mbx-class="dot">
        <circle cx={4.5} cy={4.5} r={3.5} />
      </svg>
      <div key={"list_element_" + index}>{element}</div>
    </div>
  ));
};

export default listComponent;
