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
  dark: (props) => props.dark,
};
