import {
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../../utils/global";
import { CalendarDate, CalendarProps } from "../Calendar/types";

export type DatePickerProps = ComponentWithCallback<CalendarDate> &
  ComponentWithValue<CalendarDate> &
  CalendarProps;

export type DatePickerComponent = MoBrixUiComponent<DatePickerProps>;
