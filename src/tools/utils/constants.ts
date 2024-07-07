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
export const FEATURES_PROPS: Record<
  keyof Features & CommonProps,
  (props: CommonProps) => { enabled: boolean; featureKey: string }
> = {
  opHov: (props) => ({
    enabled: !props.disabled && props.hover,
    featureKey: "opHov",
  }),
  opAct: (props) => ({
    enabled: !props.disabled,
    featureKey: "opAct",
  }),
  animation: (props) => ({
    enabled: props.animated && props.animation,
    featureKey: `anim-${props.animation}`,
  }),
  colFc: (props) => ({
    enabled: !props.disabled && props.a11y,
    featureKey: "colFc",
  }),
  noShFc: (props) => ({
    enabled: true,
    featureKey: "noShFc",
  }),
  fillFc: (props) => ({
    enabled: !props.disabled && props.a11y,
    featureKey: "fillFc",
  }),
};

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
