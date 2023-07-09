import React from "react";

import { MobrixUiReactiveComponent } from "../../../types/global";
import { RadioButtonGroupProps } from "../../../types/components/molecules/RadioButtonGroup";

import classNames from "classnames";

import Label from "../../atoms/Label";
import RadioButton from "../../atoms/RadioButton";

const radioButtonGroupComponent: MobrixUiReactiveComponent<
  number,
  RadioButtonGroupProps
> = ({
  value,
  setValue,
  buttons = [],
  elementClassName,
  dark,
  onChange = () => {},
}) =>
  buttons.map((element, index) => {
    return (
      <div
        className={classNames(
          "radio-group-element",
          element.textPosition || "left",
          elementClassName
        )}
        key={"radio_group_element_" + index}
      >
        {element.text && (
          <Label key="radio_text" className="radio-text" dark={dark}>
            {element.text}
          </Label>
        )}
        {element.component}
        <RadioButton
          deselectable={false}
          dark={dark}
          id={"radio_component_" + index}
          key="radio_component"
          className="radio-component"
          value={value === index}
          onChange={() => {
            onChange(index);
            setValue(index);
          }}
        />
      </div>
    );
  });

export default radioButtonGroupComponent;
