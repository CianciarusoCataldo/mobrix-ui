import React from "react";

import {
  MobrixUiReactiveComponent,
  RadioButtonGroupProps,
  RadioElement,
} from "../../../types";

import Label from "../../atoms/Label";
import RadioButton from "../../atoms/RadioButton";

const radioButtonGroupComponent: MobrixUiReactiveComponent<
  number,
  RadioButtonGroupProps
> = ({
  value,
  setValue,
  buttons,
  elements = [],
  elementClassName = "",
  dark,
  radioProps = {},
  onChange = () => { },
  defaultPosition = "left",
}) => {
    const returnElements = buttons || elements.map(text => ({ text, textPosition: defaultPosition } as RadioElement))

    return returnElements.map((element, index) => (
      <div
        className={elementClassName}
        data-mobrix-ui-text-position={element.textPosition || defaultPosition}
        data-mobrix-ui-class="radio-group-element"
        key={"radio_group_element_" + index}
      >
        {element.text && (
          <Label key="radio_text" additionalProps={{
            "data-mobrix-ui-class": "radio-text"
          }} dark={dark}>
            {element.text}
          </Label>
        )}
        {element.component}
        <RadioButton
          deselectable={false}
          additionalProps={{ "data-mobrix-ui-test": "radio_component_" + index }}
          key="radio_component"
          value={value === index}
          onChange={() => {
            onChange(index);
            setValue(index);
          }}
          {...radioProps}
          {...(element.props || {})}
        />
      </div>
    ))
  };

export default radioButtonGroupComponent;
