import React from "react";

import { BuilderProps, DropdownProps, MbxUiComponent } from "../../../types";

import Popup from "../Popup";
import { ArrowIcon } from "../../../icons";
import Container from "../Container";
import IconButton from "../../atoms/IconButton";
import Button from "../../atoms/Button";

const Component: MbxUiComponent<DropdownProps, Omit<BuilderProps, "name">> = ({
  value,
  onChange,
  /* istanbul ignore next */
  onFocusLost = () => {},
  dark,
  background,
  disabled,
  hover,
  active,
  shadow,
  a11y,
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
    a11y,
  };

  /* istanbul ignore next */
  const fcFunc = () => {
    onFocusLost();
    keyDown(false);
  };

  const invert = () => keyDown(!vis);

  const chFunc = () => {
    onChange(sel);
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
              chFunc();
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
      a11y,
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
        <IconButton onClick={invert} key="opts-m" {...cProps} a11y={false}>
          <div tabIndex={-1} key="drop_s_e_b">
            {elements[value] || <div />}
          </div>
        </IconButton>
        <IconButton
          active={active}
          {...cProps}
          onClick={invert}
          data-mbx-rt={vis}
          key="ar-ic"
        >
          <ArrowIcon {...cProps} width="15" height="12" />
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
              chFunc();
            }}
            features={{ noShFc: true, colFc: true }}
            key={`it_${index}`}
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
