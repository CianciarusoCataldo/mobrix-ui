import React from "react";

import { MbxUiReactiveComponent, TabViewerProps } from "../../../types";

import Container from "../Container";
import Button from "../../atoms/Button";

const tabViewerComponent: MbxUiReactiveComponent<number, TabViewerProps> = ({
  dark,
  onChange = () => {},
  setValue,
  tabClassName = "",
  tabSelectedClassName = "",
  tabUnselectedClassName = "",
  tabViewClassName = "",
  tabs = [],
  shadow,
  value,
  disabled,
}) => [
  <div key="tabs_list" data-mbx-scl="flxr;">
    {tabs.map((tab, index) => (
      <Button
        shadow={shadow}
        hover={!(index === value)}
        animated={false}
        disabled={disabled}
        dark={dark}
        scl={`tab;${index === value ? "sel;" : ""}`}
        className={`${tabClassName} ${
          index === value ? tabSelectedClassName : tabUnselectedClassName
        }`}
        key={`tab_${index}`}
        onClick={() => {
          setValue(index);
          onChange(index);
        }}
      >
        {tab.label}
      </Button>
    ))}
  </div>,
  <Container
    scl="tb-v"
    className={tabViewClassName}
    dark={dark}
    key="tabs_view"
    shadow={shadow}
    background={false}
    disabled={disabled}
  >
    {tabs.length > 0 && tabs.length > value ? tabs[value].content : <div />}
  </Container>,
];

export default tabViewerComponent;
