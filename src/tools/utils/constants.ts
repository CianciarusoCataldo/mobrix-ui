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
  debug: { scl: "", features: {} },
};
export const FEATURES_PROPS: Record<
  keyof Features & CommonProps,
  (props: CommonProps) => { enabled: boolean; featureKey: string }
> = {
  opacityOnHover: (props) => ({
    enabled: !props.disabled && props.hover,
    featureKey: "opHov",
  }),
  opacityOnActive: (props) => ({
    enabled: !props.disabled,
    featureKey: "opAct",
  }),
  animation: (props) => ({
    enabled: props.animated && props.animation,
    featureKey: `anim-${props.animation}`,
  }),
  textcolorOnFocus: (props) => ({
    enabled: !props.disabled && props.a11y,
    featureKey: "colFc",
  }),
  noShadowOnFocus: (props) => ({
    enabled: true,
    featureKey: "noShFc",
  }),
  fillOnFocus: (props) => ({
    enabled: !props.disabled && props.a11y,
    featureKey: "fillFc",
  }),
};

export const MBX_ATTRIBUTES: Partial<
  Record<keyof CommonProps, (props: CommonProps) => boolean>
> = {
  dark: (props) => props.dark,
  shadow: (props) => props.shadow,
  hide: (props) => props.hide,
  background: (props) => props.background,
  disabled: (props) => props.disabled,
  a11y: (props) => props.a11y,
  hover: (props) => props.hover && !props.disabled,
  animated: (props) => props.animated && !props.disabled,
};

export const MBX_ATTS_MAP: Partial<
  Record<keyof typeof MBX_ATTRIBUTES, string>
> = {
  dark: "dk",
  shadow: "sh",
  hide: "hide",
  background: "bg",
  disabled: "dsb",
  a11y: "a11y",
  hover: "hv",
  animated: "anm",
};
