import React from "react";

import { MbxUiReactiveComponent, RadioButtonGroupProps } from "../../../types";

import Label from "../../atoms/Label";
import RadioButton from "../../atoms/RadioButton";

const cssClasses = {
  top: { dir: "column", rev: "bottom" },
  bottom: { dir: "column-reverse", rev: "top" },
  left: { dir: "row", rev: "right" },
  right: { dir: "row-reverse", rev: "left" },
} as const;

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
  const getMargins = (position: string) => ({
    [`margin${position.replace(/\b\w/g, (l) => l.toUpperCase())}`]: 0,
    [`margin${cssClasses[position].rev.replace(/\b\w/g, (l) =>
      l.toUpperCase()
    )}`]: "0.7rem",
  });

  return buttons.map((element, index) => {
    const txtPosition = element.textPosition || defaultPosition;

    return (
      <div
        className={elementClassName}
        key={"rgr_el_" + index}
        data-mbx-rdgp={txtPosition}
        style={{
          flexDirection: cssClasses[txtPosition].dir,
        }}
      >
        <Label
          hide={!element.text}
          disabled={disabled}
          key="rd_txt"
          dark={dark}
          style={{
            ...getMargins(txtPosition),
          }}
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
