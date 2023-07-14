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
  <div className="tabs-list" key="tabs_list">
    {tabs.map((tab, index) => (
      <Button
        className={classNames(tabClassName, {
          selected: index === value,
          tab: !unstyled,
          [tabSelectedClassName]: index === value,
          [tabUnselectedClassName]: index !== value,
        })}
        dark={dark}
        id={`tab_${index}`}
        key={`tab_${index}`}
        onClick={() => {
          setValue(index);
          onChange(index);
        }}
        unstyled
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
