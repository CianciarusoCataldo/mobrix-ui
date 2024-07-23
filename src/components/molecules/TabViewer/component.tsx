import React, { Suspense } from "react";

import { MbxUiReactiveComponent, TabViewerProps } from "../../../types";

import Container from "../Container";
import Button from "../../atoms/Button";

const tabVComponent: MbxUiReactiveComponent<number, TabViewerProps> = ({
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
  const sProps = { a11y, dark, background, disabled };
  return [
    <div {...(!a11y && { tabIndex: -1 })} key="t_l" data-mbx-tbls="">
      {tabs.map((tab, index) => {
        const isTabSel = index === value;
        return (
          <Button
            {...sProps}
            shadow={false}
            hover={!isTabSel && hover}
            animated={false}
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
      {...sProps}
      key="t_vw"
      className={tabViewClassName}
      shadow={shadow}
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

export default tabVComponent;
