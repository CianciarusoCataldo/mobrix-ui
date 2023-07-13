import React from "react";
import classNames from "classnames";

import { MobrixUiReactiveComponent, TabViewerProps } from "../../../types";

import Container from "../../molecules/Container";
import Button from "../../atoms/Button";

const tabViewerComponent: MobrixUiReactiveComponent<number, TabViewerProps> = ({
  onChange = () => {},
  dark,
  setValue,
  tabs,
  tabClassName,
  tabSelectedClassName,
  tabUnselectedClassName,
  tabViewClassName,
  unstyled,
  value,
}) => {
  let tabMap: Record<string, JSX.Element> = {};
  tabs.forEach((tab) => {
    if (tab.label) {
      tabMap[tab.label] = tab.content;
    }
  });
  return [
    <div className="tabs-list" key="tabs_list">
      {tabs.map((tab, index) => (
        <Button
          id={`tab_${index}`}
          key={`tab_${index}`}
          dark={dark}
          className={classNames(tabClassName, {
            tab: !unstyled,
            selected: index === value,
            [tabSelectedClassName]: index === value,
            [tabUnselectedClassName]: index !== value,
          })}
          unstyled
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
      key="tabs_view"
      id="tabs_view"
      unstyled={unstyled}
      dark={dark}
      className={classNames(tabViewClassName, { "tab-view": !unstyled })}
    >
      {tabs.length > 0 && tabs[value].content}
    </Container>,
  ];
};

export default tabViewerComponent;
