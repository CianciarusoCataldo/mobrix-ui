import {
  ClickableComponent,
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../../utils/global";

export type RadioButtonProps = ComponentWithValue<boolean> &
  ComponentWithCallback<boolean> &
  ClickableComponent & {};

export type RadioButtonComponent = MoBrixUiComponent<RadioButtonProps>;
