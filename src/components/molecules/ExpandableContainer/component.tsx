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
}) => [
  children,
  <div
    key="exp_a"
    style={{
      overflow: "hidden",
      maxHeight: value ? "0" : "100vh",
      transition: `max-height 0.3s ease-${value ? "out" : "in"}`,
    }}
  >
    {expanded}
  </div>,
  <IconButton
    disabled={disabled}
    onClick={() => {
      onChange(!value);
      setValue(!value);
    }}
    key="arr_bt"
    style={{
      transform: `rotate(${value ? "0" : "180"}deg)`,
    }}
    hover={hover}
    dark={dark}
    active={active}
  >
    <ArrowIcon disabled={disabled} />
  </IconButton>,
];

export default component;
