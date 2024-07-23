import React from "react";

import { MbxUiReactiveComponent, RadioButtonGroupProps } from "../../../types";

import Label from "../../atoms/Label";
import RadioButton from "../../atoms/RadioButton";

const cssC = {
  top: { dir: "column", rev: "bottom" },
  bottom: { dir: "column-reverse", rev: "top" },
  left: { dir: "row", rev: "right" },
  right: { dir: "row-reverse", rev: "left" },
} as const;

const parse = (inp: string) => inp.replace(/\b\w/g, (l) => l.toUpperCase());
const getMargins = (position: string) => ({
  [`margin${parse(position)}`]: 0,
  [`margin${parse(cssC[position].rev)}`]: "0.7rem",
});

const component: MbxUiReactiveComponent<number, RadioButtonGroupProps> = ({
  value,
  setValue,
  buttons = [],
  elementClassName = "",
  dark,
  radioProps = {},
  onChange = () => {},
  defaultPosition = "left",
  disabled,
  active,
  hover,
  a11y,
}) => {
  const sProps = { disabled, dark, hover, a11y };

  return buttons.map(
    (
      { textPosition = defaultPosition, text, component, props = {} },
      index,
    ) => (
      <div
        className={elementClassName}
        key={"rgr_el_" + index}
        data-mbx-rdgp={textPosition}
        style={{
          flexDirection: cssC[textPosition].dir,
        }}
      >
        <Label
          hide={!text}
          key="rd_txt"
          style={{
            ...getMargins(textPosition),
          }}
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
            setValue(index);
          }}
          {...sProps}
          {...radioProps}
          {...props}
        />
      </div>
    ),
  );
};

export default component;
