import React, { Suspense } from "react";

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
}) => {
  const Render = tabs[value]?.lazy || (() => <div />);

  return [
    <div key="tabs_list" data-mbx-scl="flxr">
      {tabs.map((tab, index) => {
        const isTabSel = index === value;
        return (
          <Button
            shadow={false}
            hover={!isTabSel}
            animated={false}
            disabled={disabled}
            dark={dark}
            data-mbx-cls="tab"
            features={{ opAct: !isTabSel, opHov: !isTabSel, colFc: true }}
            data-mbx-tbvsel={isTabSel}
            style={{
              
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
        );
      })}
    </div>,
    <Container
      data-mbx-cls="tb-v"
      className={tabViewClassName}
      dark={dark}
      key="tabs_view"
      shadow={shadow}
      disabled={disabled}
    >
      {tabs.length > 0 && tabs.length > value ? (
        tabs[value]?.content || (
          <Suspense fallback={<div />}>
            <Render />
          </Suspense>
        )
      ) : (
        <div />
      )}
    </Container>,
  ];
};

export default tabViewerComponent;
