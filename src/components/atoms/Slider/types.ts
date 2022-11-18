import {
  ComponentWithCallback,
  ComponentWithValue,
  GenericInputComponent,
  MoBrixUiComponent,
  NumericInputContent,
} from "../../../utils/global";

export type SliderProps = ComponentWithValue<number> &
  ComponentWithCallback<number> &
  GenericInputComponent<number> &
  NumericInputContent & { thumbColor?: string };

export type SliderComponent = MoBrixUiComponent<SliderProps>;
