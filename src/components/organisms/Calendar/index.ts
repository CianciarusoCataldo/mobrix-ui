import "./styles.css";

import { CalendarComponent, CalendarDate, DeepPartial } from "../../../types";

import { today } from "./utils";
import { buildMobrixUiReactiveComponent } from "../../../utils";

import calendarComponent from "./component";

/**
 * A ready to use Calendar, fully customizable to be usable for many purposes.
 *
 * @since 2.0.0
 *
 * @param value actual selected date (`null` if not set)
 * @param onChange callback called when a day is selected, with the entire selected date (year, month, day) as a parameter
 * @param onViewChange callback called when the Calendar view (the showed month) change
 * @param {string[]} days custom days labels (default use english days)
 * @param {string[]} months custom months labels (default use english months)
 * @param {boolean} dayLabel show/hide actual day label on top of the calendar
 * @param {number} startYear starting displayed year (default today year)
 * @param {number} startMonth starting displayed month (default today month)
 * @param {boolean} hideArrow show/hide arrow buttons
 * @param {boolean} fromToday if true, prevent the user to select onnly a date greater or equal to today date
 * @param {string} className `common MoBrix-ui prop` - custom className
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component, enabling or not MoBrix-ui custom styles
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component
 * @param {boolean} animated `common MoBrix-ui prop` enable/disable component animations
 * @param {string} key `common MoBrix-ui prop` - custom component React key (the standard {@link https://reactjs.org/docs/lists-and-keys.html key parameter})
 * @param {boolean} a11y `common MoBrix-ui prop` - enable/disable accessibility features
 * @param {boolean} a11yDark `common MoBrix-ui prop` - if the `a11y` parameter is `true`, override standard focus color style with/without dark mode (normally, the color changes accordingly to the `dark` parameter)
 * @param {string} a11yLabel `common MoBrix-ui prop` - if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label aria-label}
 * @param {() => void} onFocus `common MoBrix-ui prop` - callback called when component is focused
 * @param {() => void} onFocusLost `common MoBrix-ui prop` - callback called when component focus is lost
 * @param {(keyEvent: any) => void} onKeyDown `common MoBrix-ui prop` - callback called when a key is pressed when inside the component
 *
 * @example <caption>Example Table usage</caption>
 *
 * import { render } from "react-dom";
 * import { Calendar } from 'mobrix-ui';
 *
 * render(<Calendar value={{ year:1993, month:2, day:19 }} />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Calendar: CalendarComponent = ({
  value: inputValue,
  shadow,
  hideArrows,
  days,
  months,
  onViewChange,
  onChange,
  startYear,
  startMonth,
  fromToday,
  dayLabel,
  ...commonProps
}) => {
  const todayDate = today();

  return buildMobrixUiReactiveComponent<DeepPartial<CalendarDate>>({
    name: "calendar",
    commonProps,
    inputValue,
    defaultValue: {
      year: todayDate.year,
      month: todayDate.month,
      day: todayDate.dayOfTheMonth,
    },
    render: (value, setValue) =>
      calendarComponent({
        today: todayDate,
        value,
        setValue,
        shadow,
        hideArrows,
        days,
        months,
        onViewChange,
        onChange,
        startYear,
        startMonth,
        fromToday,
        dayLabel,
        ...commonProps,
      }),
  });
};

export default Calendar;
