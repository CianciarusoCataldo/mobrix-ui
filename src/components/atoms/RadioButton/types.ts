import {
  ClickableComponent,
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../../utils/global";

export type RadioButtonProps = ComponentWithValue<boolean> &
  ComponentWithCallback<boolean> &
  ClickableComponent & {
    deselectable?: boolean;
  };

export type RadioButtonComponent = MoBrixUiComponent<RadioButtonProps>;
