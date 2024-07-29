import React from "react";

import {
  BuilderComponent,
  MbxUiComponent,
  RadioButtonGroupProps,
} from "../../../types";

import Label from "../../atoms/Label";
import RadioButton from "../../atoms/RadioButton";

const cssC = {
  top: { dir: "column", rev: "bottom" },
  bottom: { dir: "column-reverse", rev: "top" },
  left: { dir: "row", rev: "right" },
  right: { dir: "row-reverse", rev: "left" },
} as const;

const parse = (inp: string) => inp.replace(/\b\w/g, (l) => l.toUpperCase());

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
    ) => {
      const pos = Object.keys(cssC).includes(textPosition)
        ? textPosition
        : "left";
      return (
        <div
          className={elementClassName}
          key={"rgr_el_" + index}
          data-mbx-rdgp={pos}
          style={{
            flexDirection: cssC[pos].dir,
          }}
        >
          <Label
            hide={!text}
            key="rd_txt"
            style={{
              [`margin${parse(pos)}`]: 0,
              [`margin${parse(cssC[pos].rev)}`]: "0.7rem",
            }}
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
        </div>
      );
    },
  );
};

export default component;
