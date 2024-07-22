import React from "react";

import { DropdownProps, MbxUiReactiveComponentBuilder } from "../../../types";

import Popup from "../Popup";
import { ArrowIcon } from "../../../icons";
import Container from "../Container";
import IconButton from "../../atoms/IconButton";
import Button from "../../atoms/Button";

const Component: MbxUiReactiveComponentBuilder<number, DropdownProps> = ({
  value,
  setValue,
  onChange = () => {},
  /* istanbul ignore next */
  onFocusLost = () => {},
  dark,
  background,
  disabled,
  hover,
  active,
  shadow,
  elements = [],
  ...props
}) => {
  const [vis, setVis] = React.useState(false);
  const [sel, selEl] = React.useState<number>(-2);

  const keyDown = (v: boolean) => {
    vis !== v && setVis(v);
    selEl(-1);
  };

  const cProps = {
    dark,
    background,
    disabled,
    hover,
  };

  /* istanbul ignore next */
  const fcFunc = () => {
    onFocusLost();
    keyDown(false);
  };

  return {
    mbxProps: {
      ...cProps,
      shadow,
      onFocusLost: fcFunc,
      onKeyDown: (e) => {
        let actual = sel;
        switch (e.code) {
          /* istanbul ignore next */
          case "Tab": {
            if (
              (e.shiftKey && actual === 0) ||
              actual === elements.length - 1
            ) {
              keyDown(false);
            }
            break;
          }
          case "Enter": {
            if (sel > -1) {
              onChange(sel);
              setValue(sel);
              keyDown(false);
              return;
            } else {
              setVis(!vis);
            }
            e.preventDefault();
            break;
          }

          case "Escape": {
            keyDown(false);
            return;
          }

          case "ArrowUp": {
            if (actual === 0) {
              keyDown(false);
              return;
            }
            actual -= 1;
            break;
          }

          case "ArrowDown": {
            if (actual === elements.length - 1) {
              keyDown(false);
              return;
            }
            if (!vis) {
              setVis(true);
            }
            actual += 1;
            break;
          }
        }

        actual !== sel && selEl(actual);
      },
      ...props,
    },
    Component: [
      <Container
        active={active}
        key="t-bt"
        dark={dark}
        background={false}
        shadow={false}
      >
        <IconButton
          onClick={() => {
            keyDown(!vis);
          }}
          key="opts-m"
          a11y={false}
          {...cProps}
        >
          <div tabIndex={-1} key="drop_s_e_b">
            {elements[value] || <div />}
          </div>
        </IconButton>
        <IconButton
          active={active}
          {...cProps}
          onClick={() => {
            keyDown(!vis);
          }}
          style={
            {
              transform: `rotate(${vis ? "180" : "0"}deg)`,
              rotate: "-90deg",
              "--mbx-trdur": "0.1s",
            } as React.CSSProperties
          }
          key="arr-ic"
        >
          <ArrowIcon width="15" height="12" />
        </IconButton>
      </Container>,
      <Popup key="opts" shadow={shadow} hide={!vis} a11y={false} {...cProps}>
        {elements.map((item, index) => (
          <Button
            animated={false}
            shadow={false}
            active={active}
            onFocus={() => {
              selEl(index);
            }}
            onClick={() => {
              onChange(index);
              setValue(index);
              keyDown(false);
            }}
            features={{ noShFc: true, colFc: true }}
            key={`item_${index}`}
            {...cProps}
          >
            {item}
          </Button>
        ))}
      </Popup>,
    ],
  };
};

export default Component;
