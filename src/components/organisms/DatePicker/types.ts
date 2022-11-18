import {
  CommonProps,
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../../utils/global";
import { CalendarDate, CalendarProps, CalendarSharedProps } from "../Calendar/types";

export type DatePickerProps = CommonProps &
  ComponentWithCallback<CalendarDate> &
  ComponentWithValue<CalendarDate> &
  CalendarProps;

export type DatePickerComponent = MoBrixUiComponent<DatePickerProps>;
