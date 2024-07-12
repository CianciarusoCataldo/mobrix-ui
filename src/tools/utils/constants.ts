import { CommonProps } from "../../types";
import { Features } from "../../types/global/global";

export const DEFAULT_COMMON_PROPS: CommonProps = {
  background: true,
  hover: true,
  disabled: false,
  dark: false,
  animated: true,
  shadow: true,
  additionalProps: {},
  a11y: true,
  unstyled: false,
  scl: "",
  fts: "",
  features: {},
};
export const parseFts: (
  props: CommonProps
) => Record<keyof Features & CommonProps, string | undefined> = (props) => ({
  opHov: !props.disabled && props.hover && "opHov",
  opAct: !props.disabled && "opAct",
  animation: props.animated && props.animation && `anim-${props.animation}`,
  colFc: !props.disabled && props.a11y && "colFc",
  noShFc: "noShFc",
  fillFc: !props.disabled && props.a11y && "fillFc",
  opFc: !props.disabled && props.a11y && "opFc",
});

export const parseAtts: (
  props: CommonProps
) => Partial<Record<keyof CommonProps, string | undefined>> = (props) => ({
  dark: props.dark && "dk",
  shadow: props.shadow && "sh",
  hide: props.hide && "hide",
  background: props.background && "bg",
  disabled: props.disabled && "dsb",
  a11y: props.a11y && "a11y",
  hover: props.hover && !props.disabled && "hv",
  animated: props.animated && !props.disabled && "anm",
});
