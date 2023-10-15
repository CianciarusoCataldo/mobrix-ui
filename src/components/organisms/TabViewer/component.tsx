import React from "react";
import classNames from "classnames";

import { MobrixUiReactiveComponent, TabViewerProps } from "../../../types";

import Container from "../../molecules/Container";
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
}) => [
  <div data-mobrix-ui-class="tabs-list" key="tabs_list">
    {tabs.map((tab, index) => (
      <Button
        dark={dark}
        className={classNames(tabClassName, "tab", {
          [tabSelectedClassName]: index === value,
          [tabUnselectedClassName]: index !== value,
          selected: !unstyled && index === value,
        })}
        unstyled
        id={`tab_${index}`}
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
    className={classNames(tabViewClassName, { "tab-view": !unstyled })}
    dark={dark}
    id="tabs_view"
    key="tabs_view"
    unstyled={unstyled}
  >
    {tabs.length > 0 && tabs.length > value ? tabs[value].content : <div />}
  </Container>,
];

export default tabViewerComponent;
