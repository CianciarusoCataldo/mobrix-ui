import React from "react";

import { MbxUiReactiveComponent, RadioButtonGroupProps } from "../../../types";

import Label from "../../atoms/Label";
import RadioButton from "../../atoms/RadioButton";

const cssClasses: Record<RadioButtonGroupProps["defaultPosition"], string> = {
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
        key={"rgr_el_" + index}
        data-mbx-scl={`${cssClasses[txtPosition]};act`}
        data-mbx-cls="rdg-el"
        data-mbx-rdgp={txtPosition}
      >
        <Label
          hide={!element.text}
          disabled={disabled}
          key="rd_txt"
          dark={dark}
        >
          {element.text}
        </Label>
        {element.component}
        <RadioButton
          disabled={disabled}
          deselectable={false}
          key={`rd_cm_${index}`}
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
