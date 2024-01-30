import "./styles.css";

import { CalendarComponent, CalendarDate, DeepPartial } from "../../../types";

import { today } from "./utils";

import calendarComponent from "./component";
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
const Calendar: CalendarComponent = ({
  value: inputValue,
  hideArrows,
  days,
  months,
  onViewChange,
  onChange,
  startYear,
  startMonth,
  fromToday,
  dayLabel,
  labelClassName,
  additionalProps,
  labelProps,
  ...commonProps
}) => {
  const todayDate = today();

  return buildMbxReactiveComponent<DeepPartial<CalendarDate>>(
    commonProps,
    (props) => ({
      name: "calendar",
      commonProps: { ...props, shadow: false },
      inputValue,
      defaultValue: {
        year: todayDate.year,
        month: todayDate.month,
        day: todayDate.dayOfTheMonth,
      },
      additionalProps,
      Component: ({ value, setValue }) =>
        calendarComponent({
          today: todayDate,
          value,
          setValue,
          hideArrows,
          days,
          months,
          onViewChange,
          onChange,
          startYear,
          startMonth,
          fromToday,
          dayLabel,
          labelClassName,
          labelProps,
          ...props,
        }),
    }),
  );
};

export default Calendar;
