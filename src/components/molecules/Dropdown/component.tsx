import React from "react";

import { BuilderProps, DropdownProps, MbxUiComponent } from "../../../types";

import { ArrowIcon } from "../../../icons";

import Popup from "../Popup";
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

  const cProps = {
    dark,
    background,
    disabled,
    hover,
    a11y: false,
  };

  /* istanbul ignore next */
  const fcFunc = () => {
    onFocusLost();
    setVis(false);
  };

  const invert = () => setVis(!vis);

  const chFunc = (ind) => {
    onChange(ind);
    setVis(false);
  };

  return {
    mbxProps: {
      ...cProps,
      shadow,
      onFocusLost: fcFunc,
      onKeyDown: (e) => {
        switch (e.code) {
          case "Enter": {
            invert();
            return;
          }

          case "Escape": {
            setVis(false);
            return;
          }
        }
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
        a11y={false}
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
      <Popup key="opts" {...cProps} shadow={shadow} hide={!vis}>
        {elements.map((item, index) => (
          <Button
            animated={false}
            shadow={false}
            active={active}
            onClick={() => {
              chFunc(index);
            }}
            features={{ colFc: true }}
            key={`it_${index}`}
            {...cProps}
            disabled={index === value || disabled}
            a11y={a11y}
          >
            {item}
          </Button>
        ))}
      </Popup>,
    ],
  };
};

export default Component;
