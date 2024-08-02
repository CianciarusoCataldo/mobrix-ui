import { BooleanProp, StringProp } from "@cianciarusocataldo/demo-ui";

export const demoProps = {
  className: StringProp(""),
  hide: BooleanProp(false),
  dark: BooleanProp(false),
  shadow: BooleanProp(false),
  unstyled: BooleanProp(false),
  animated: BooleanProp(true),
  disabled: BooleanProp(false),
  hover: BooleanProp(true),
  active: BooleanProp(false),
  background: BooleanProp(true),
  a11y: BooleanProp(true),
  a11yLabel: StringProp(""),
};

export const demoRows = [
  ["className", "dark", "hover", "disabled"],
  ["active", "shadow", "background", "animated"],
  ["hide", "unstyled", "a11y", "a11yLabel"],
];
