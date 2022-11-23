import {
  ComponentWithCallback,
  ComponentWithValue,
  GenericInputComponent,
  MoBrixUiComponent,
  NumericInputComponent,
} from "../../../utils/global";

export type SliderProps = ComponentWithValue<number> &
  ComponentWithCallback<number> &
  GenericInputComponent<number> &
  NumericInputComponent & { thumbColor?: string };

export type SliderComponent = MoBrixUiComponent<SliderProps>;
