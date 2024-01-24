import React from "react";

import { MobrixUiReactiveComponent, TabViewerProps } from "../../../types";

import Container from "../Container";
import Button from "../../atoms/Button";

const tabViewerComponent: MobrixUiReactiveComponent<number, TabViewerProps> = ({
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
  hover,
  disabled,
}) => [
  <div data-mbx-class="tabs-list" key="tabs_list">
    {tabs.map((tab, index) => (
      <Button
        shadow={shadow}
        hover={!(index === value)}
        animated={false}
        disabled={disabled}
        dark={dark}
        additionalProps={{
          "data-mbx-class": "tab",
          "data-mbx-test": `tab_${index}`,
          "data-mbx-tab-viewer-selected": index === value,
        }}
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
    additionalProps={{
      "data-mbx-class": "tab-view",
      "data-mbx-test": "tabs_view",
    }}
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
