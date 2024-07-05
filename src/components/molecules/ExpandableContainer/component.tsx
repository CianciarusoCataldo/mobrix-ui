import React from "react";

import {
  ExpandableContainerProps,
  MbxUiReactiveComponent,
} from "../../../types";

import IconButton from "../../atoms/IconButton";

const expandableContainerComponent: MbxUiReactiveComponent<
  boolean,
  ExpandableContainerProps
> = ({
  value: compact,
  setValue: setCompact,
  children,
  expanded,
  dark,
  onChange = () => {},
  disabled,
  hover,
}) => {
  let components = [children];

  components.push(
    <div key="expanded_area" data-mbx-scl="exp-area">
      {expanded}
    </div>,
  );
  components.push(
    <IconButton
      hover={hover}
      disabled={disabled}
      onClick={() => {
        onChange(!compact);
        setCompact(!compact);
      }}
      additionalProps={{
        "data-mbx-class": "container-arrow-button",
        "data-mbx-features": "noShFc;opAct;opHov",
      }}
      key="arrow_button"
      dark={dark}
      debug={{
        scl: "con-arr-bt",
      }}
    >
      <svg
        data-mbx-compact={compact}
        data-mbx-class="arrow"
        data-mbx-features="fillFc;"
        tabIndex={0}
        width="1.5rem"
        fillRule="evenodd"
        viewBox="0 0 512 319.24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m5.9 270.28 43.07 43.07c7.86 7.86 20.73 7.84 28.56 0l178.48-178.48L434.5 313.35c7.86 7.86 20.74 7.82 28.56 0l43.07-43.07c7.83-7.84 7.83-20.72 0-28.56L313.72 49.32l-.36-.37-43.07-43.07c-7.83-7.82-20.7-7.86-28.56 0l-43.07 43.07-.36.37L5.9 241.72c-7.87 7.86-7.87 20.7 0 28.56z" />
      </svg>
    </IconButton>,
  );
  return components;
};

export default expandableContainerComponent;
