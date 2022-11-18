import "./styles.css";

import React from "react";

import { RadioButtonGroupComponent } from "./types";
import { withMobrixUiValue } from "../../../utils";
import RadioButton from "../../atoms/RadioButton";
import Label from "../../atoms/Label";
import classNames from "classnames";

/**
 * A flexible and fully customizable radio buttons group
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/RadioButtonGroup
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const RadioButtonGroup: RadioButtonGroupComponent = ({
  value: inputValue,
  buttons = [],
  elementClassName,
  ...commonProps
}) => {
  return withMobrixUiValue({
    name: "mobrix-ui-radio-button-group",
    defaultValue: -1,
    inputValue,
    commonProps,
    props: (value, setValue) => {
      return {
        Component: buttons.map((element, index) => {
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
                <Label
                  key="radio_text"
                  className="radio-text"
                  dark={commonProps.dark}
                >
                  {element.text}
                </Label>
              )}
              {element.component}
              <RadioButton
                key="radio_component"
                className="radio-component"
                value={value === index}
                onChange={() => setValue(index)}
              />
            </div>
          );
        }),
      };
    },
  });
};

export default RadioButtonGroup;
