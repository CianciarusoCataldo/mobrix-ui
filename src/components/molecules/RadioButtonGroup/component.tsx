import React from "react";

import {
  BuilderComponent,
  MbxUiComponent,
  RadioButtonGroupProps,
} from "../../../types";

import { getMargins } from "../../../tools/utils/utils";

import Label from "../../atoms/Label";
import RadioButton from "../../atoms/RadioButton";
import Container from "../Container";

const component: MbxUiComponent<RadioButtonGroupProps, BuilderComponent[]> = ({
  value,
  buttons = [],
  elementClassName = "",
  dark,
  radioProps = {},
  onChange,
  defaultPosition = "left",
  disabled,
  active,
  hover,
  a11y,
}) => {
  const sProps = { disabled, hover, a11y };

  return buttons.map(
    (
      { textPosition = defaultPosition, text, component, props = {} },
      index,
    ) => (
      <Container
        unstyled
        className={elementClassName}
        key={"rgr_el_" + index}
        data-mbx-dir={textPosition}
      >
        <Label
          hide={!text}
          key="rd_txt"
          style={getMargins(textPosition)}
          dark={dark}
          {...sProps}
        >
          {text}
        </Label>
        {component}
        <RadioButton
          active={active}
          deselectable={false}
          key={`rd_cm_${index}`}
          value={value === index}
          onChange={() => {
            onChange(index);
          }}
          {...sProps}
          {...radioProps}
          {...props}
        />
      </Container>
    ),
  );
};

export default component;
