import React from "react";

import { MbxUiReactiveComponent, RadioButtonGroupProps } from "../../../types";

import Label from "../../atoms/Label";
import RadioButton from "../../atoms/RadioButton";

const textPositionCssClasses: Record<
  RadioButtonGroupProps["defaultPosition"],
  string
> = {
  top: "flxc",
  bottom: "flxcr",
  left: "flxr",
  right: "flxrr",
};

const radioButtonGroupComponent: MbxUiReactiveComponent<
  number,
  RadioButtonGroupProps
> = ({
  value,
  setValue,
  buttons = [],
  elementClassName = "",
  dark,
  radioProps = {},
  onChange = () => {},
  defaultPosition = "left",
  disabled,
}) => {
  return buttons.map((element, index) => {
    const txtPosition = element.textPosition || defaultPosition;

    return (
      <div
        className={elementClassName}
        key={"radio_group_element_" + index}
        data-mbx-scl={`t-${txtPosition};${textPositionCssClasses[txtPosition]};rdg-el-${index};`}
      >
        {element.text && (
          <Label disabled={disabled} key="radio_text" dark={dark}>
            {element.text}
          </Label>
        )}
        {element.component}
        <RadioButton
          disabled={disabled}
          deselectable={false}
          additionalProps={{ "data-mbx-test": "radio_component_" + index }}
          key={`radio_component_${index}`}
          value={value === index}
          onChange={() => {
            onChange(index);
            setValue(index);
          }}
          {...radioProps}
          {...(element.props || {})}
        />
      </div>
    );
  });
};

export default radioButtonGroupComponent;
