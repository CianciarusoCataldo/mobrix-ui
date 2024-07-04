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
  busy: false,
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
  hover: (props) => props.hover && !props.disabled,
  background: (props) => props.background,
  disabled: (props) => props.disabled,
  a11y: (props) => props.a11y,
  animated: (props) => props.animated && !props.disabled,
};
