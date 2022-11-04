import { CommonProps, MoBrixUiComponent } from "../../../utils/global";

export type CalendarProps = CommonProps & {
  day?: number;
  month?: number;
  year?: number;
};

export type CalendarComponent = MoBrixUiComponent<CalendarProps>;
