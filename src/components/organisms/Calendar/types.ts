import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
  ComponentWithValue,
  DeepPartial,
  MoBrixUiComponent,
} from "../../../utils/global";

export interface CalendarDate {
  month: number;
  year: number;
  day: number;
}

export interface CalendarSharedProps {
  months?: string[];
  days?: string[];
}

export type CalendarProps = CommonProps &
  ComponentWithValue<DeepPartial<CalendarDate>> &
  ComponentWithCallback<CalendarDate> &
  CalendarSharedProps & {
    hideArrows?: boolean;
    startYear?: number;
    fromToday?: boolean;
    startMonth?: number;
    dayLabel?: boolean;
    onViewChange?: (date: CalendarDate) => void;
  };

export type CalendarComponent = MoBrixUiComponent<CalendarProps>;
