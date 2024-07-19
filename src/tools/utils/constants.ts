import { CommonProps } from "../../types";
import { Features } from "../../types/global/global";

export const D_PROPS: CommonProps = {
  background: true,
  hover: true,
  disabled: false,
  dark: false,
  animated: true,
  shadow: true,
  props: {},
  a11y: true,
  unstyled: false,
  scl: "",
  features: {},
};
export const parseFts: (
  props: CommonProps
) => Record<keyof Features, { var?: string; val?: any } | undefined> = (
  props
) => ({
  opHov: !props.disabled && props.hover && { var: "op-hov", val: 0.7 },
  opAct: !props.disabled && { var: "op-act", val: 0.3 },
  noShFc: { var: "sh-def", val: "none" },
  opFc: !props.disabled && props.a11y && { var: "op-f", val: 0.4 },
  colFc: !props.disabled && props.a11y && {},
});
