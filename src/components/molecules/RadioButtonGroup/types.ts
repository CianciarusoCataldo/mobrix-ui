import {
  CommonProps,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../../utils/global";

export type RadioElement = {
  text?: string;
  component?: JSX.Element;
  textPosition?: "top" | "bottom" | "left" | "right";
};

export type RadioButtonGroupProps = ComponentWithValue<number> & {
  buttons?: RadioElement[];
  elementClassName?: string;
};

export type RadioButtonGroupComponent = MoBrixUiComponent<
  RadioButtonGroupProps & CommonProps
>;
