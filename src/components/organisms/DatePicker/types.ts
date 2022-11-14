import {
  CommonProps,
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../../utils/global";
import { CalendarDate, CalendarSharedProps } from "../Calendar/types";

export type DatePickerProps = CommonProps &
  ComponentWithCallback<CalendarDate> &
  ComponentWithValue<CalendarDate> &
  CalendarSharedProps;

export type DatePickerComponent = MoBrixUiComponent<DatePickerProps>;
