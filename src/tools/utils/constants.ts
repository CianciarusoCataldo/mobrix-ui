import { CommonProps } from "../../types";
import { Features } from "../../types/global/global";

export const SHARED_PROPS: CommonProps = {
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
  fts: "",
  features: {},
};
export const parseFts: (
  props: CommonProps
) => Record<
  keyof Features & CommonProps,
  { var?: string; val?: string; fkey: string } | undefined
> = (props) => ({
  opHov: !props.disabled &&
    props.hover && { var: "op-hov", val: 0.7, fkey: "_" },
  opAct: !props.disabled && { var: "op-act", val: 0.3, fkey: "_" },
  noShFc: { var: "sh-def", val: "none", fkey: "_" },
  opFc: !props.disabled && props.a11y && "_",
  fillFc: !props.disabled && props.a11y && { fkey: "fillFc" },
  animation: props.animated &&
    props.animation && { fkey: `anim-${props.animation}` },
  colFc: !props.disabled && props.a11y && { fkey: "colFc" },
});

export const parseAtts: (
  props: CommonProps
) => Partial<Record<keyof CommonProps, string | undefined>> = (props) => ({
  dark: props.dark && "dk",
  background: props.background && "bg",
  disabled: props.disabled && "dsb",
  a11y: props.a11y && "a11y",
  hover: props.hover && !props.disabled && "hv",
  animated: props.animated && !props.disabled && "anm",
});
