import "./styles.css";

import { CalendarDate, DatePickerComponent } from "../../../types";

import { buildMobrixUiReactiveComponent } from "../../../tools";
import { today } from "../Calendar/utils";

import datePickerComponent from "./components";
import { buildMbxReactiveComponent } from "../../../tools";

/**
 * MBX_DESCRIPTION
 *
 * MBX_PROPS
 *
 * @example MBX_EXAMPLE
 *
 * @since MBX_SINCE
 *
 * @author MBX_AUTHOR
 *
 * @copyright MBX_COPYRIGHT
 */
const DatePicker: DatePickerComponent = ({
  onChange,
  value: inputValue,
  months,
  days,
  startMonth,
  startYear,
  hideArrows,
  fromToday,
  dayLabel,
  onViewChange,
  calendarProps,
  additionalProps,
  ...commonProps
}) => {
  const todayDate = today();

  return buildMbxReactiveComponent<CalendarDate>(commonProps, (props) => ({
    name: "date-picker",
    commonProps: props,
    Component: ({ value, setValue }) =>
      datePickerComponent({
        today: todayDate,
        onChange,
        setValue,
        value,
        months,
        days,
        startMonth,
        startYear,
        hideArrows,
        fromToday,
        dayLabel,
        onViewChange,
        calendarProps,
        ...props,
      }),
    inputValue,
    defaultValue: todayDate,
    additionalProps,
  }));
};

export default DatePicker;
