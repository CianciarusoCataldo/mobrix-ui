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
  keyof Features,
  (props: CommonProps) => boolean
> = {
  opacityOnHover: (props) => !props.disabled && props.hover,
};

export const MBX_ATTRIBUTES: Partial<
  Record<keyof CommonProps, (props: CommonProps) => boolean>
> = {
  dark: (props) => props.dark,
  shadow: (props) => props.shadow,
  hide: (props) => props.hide,
  hover: (props) => props.hover && !props.disabled,
  background: (props) => props.background,
};
