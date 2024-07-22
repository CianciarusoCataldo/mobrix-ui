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
  hover,
  active,
  background,
  a11y,
}) => {
  const Render = tabs[value]?.lazy || (() => <div />);

  return [
    <div {...(!a11y && { tabIndex: -1 })} key="tabs_list" data-mbx-tbls="">
      {tabs.map((tab, index) => {
        const isTabSel = index === value;
        return (
          <Button
            a11y={a11y}
            shadow={false}
            background={background}
            hover={!isTabSel && hover}
            animated={false}
            disabled={disabled}
            dark={dark}
            active={!isTabSel && active}
            features={{ opHov: !isTabSel, colFc: true }}
            data-mbx-tbvsel={isTabSel}
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
      className={tabViewClassName}
      dark={dark}
      key="tabs_view"
      shadow={shadow}
      disabled={disabled}
      background={background}
      a11y={a11y}
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
