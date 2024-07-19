import React from "react";

import {
  ExpandableContainerProps,
  MbxUiReactiveComponent,
} from "../../../types";

import IconButton from "../../atoms/IconButton";
import { ArrowIcon } from "../../../icons";

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
    <div
      key="exp_a"
      data-mbx-scl="ovhid"
      style={{
        maxHeight: compact ? "0" : "100vh",
        transition: `max-height 0.3s ease-${compact ? "out" : "in"}`,
      }}
    >
      {expanded}
    </div>
  );
  components.push(
    <IconButton
      hover={hover}
      disabled={disabled}
      onClick={() => {
        onChange(!compact);
        setCompact(!compact);
      }}
      key="arr_bt"
      dark={dark}
      scl="mauto;flxc"
      data-mbx-cls="econ-b"
      features={{ noShFc: true, fillFc: true }}
    >
      <ArrowIcon
        transform={`rotate(${compact ? "270" : "90"})`}
        disabled={disabled}
        hover={hover}
      />
    </IconButton>
  );
  return components;
};

export default expandableContainerComponent;
