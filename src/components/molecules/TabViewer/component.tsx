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
  unstyled,
  value,
  disabled,
}) => [
  <div data-mobrix-ui-class="tabs-list" key="tabs_list">
    {tabs.map((tab, index) => (
      <Button
        disabled={disabled}
        dark={dark}
        additionalProps={{
          "data-mobrix-ui-class": "tab",
          "data-mobrix-ui-test": `tab_${index}`,
          "data-mobrix-ui-tab-viewer-selected": !unstyled && index === value,
        }}
        className={`${tabClassName} ${
          index === value ? tabSelectedClassName : tabUnselectedClassName
        }`}
        unstyled
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
      "data-mobrix-ui-class": "tab-view",
      "data-mobrix-ui-test": "tabs_view",
    }}
    className={tabViewClassName}
    dark={dark}
    key="tabs_view"
    unstyled={unstyled}
    disabled={disabled}
  >
    {tabs.length > 0 && tabs.length > value ? tabs[value].content : <div />}
  </Container>,
];

export default tabViewerComponent;
