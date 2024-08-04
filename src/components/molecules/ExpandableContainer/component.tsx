import React from "react";

import {
  ExpandableContainerProps,
  MbxUiReactiveComponent,
} from "../../../types";

import IconButton from "../../atoms/IconButton";
import { ArrowIcon } from "../../../icons";

const component: MbxUiReactiveComponent<boolean, ExpandableContainerProps> = ({
  value,
  setValue,
  children,
  expanded,
  dark,
  onChange = () => {},
  disabled,
  hover,
  active,
  a11y,
}) => [
  <IconButton
    a11y={a11y}
    disabled={disabled}
    onClick={() => {
      onChange(!value);
      setValue(!value);
    }}
    key="ar_bt"
    data-mbx-rt={!value}
    hover={hover}
    dark={dark}
    active={active}
  >
    <ArrowIcon width="25" height="32" disabled={disabled} />
  </IconButton>,
  <div key="cont">
    {children}
    <div
      key="exp_a"
      style={{
        overflow: "hidden",
        maxHeight: value ? "0" : "100vh",
        transition: `max-height 0.3s ease-${value ? "out" : "in"}`,
      }}
    >
      {expanded}
    </div>
  </div>,
];

export default component;
