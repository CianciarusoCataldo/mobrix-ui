import "./styles.css";

import { CalendarDate, DatePickerComponent } from "../../../types";

import { buildMobrixUiReactiveComponent } from "../../../utils";
import { today } from "../Calendar/utils";

import datePickerComponent from "./components";

/**
 * A smart date-picker, with an internal calendar accessible to choose a date.
 *
 * @since 2.0.0
 *
 * @param value actual selected date (`today` if not set)
 * @param onChange callback called when a day is selected, with the entire selected date (year, month, day) as a parameter
 * @param onViewChange `internal Caledar props` - callback called when the Calendar view (the showed month) change
 * @param {string[]} days `internal Caledar props` - custom days labels (default use english days)
 * @param {string[]} months `internal Caledar props` - custom months labels (default use english months)
 * @param {boolean} dayLabel `internal Caledar props` - show/hide actual day label on top of the calendar
 * @param {number} startYear `internal Caledar props` - starting displayed year (default today year)
 * @param {number} startMonth `internal Caledar props` - starting displayed month (default today month)
 * @param {boolean} hideArrow `internal Caledar props` - show/hide arrow buttons
 * @param {boolean} fromToday `internal Caledar props` - if true, prevent the user to select onnly a date greater or equal to today date
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
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/DatePicker
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
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
  ...commonProps
}) => {
  const todayDate = today();

  return buildMobrixUiReactiveComponent<CalendarDate>({
    name: "date-picker",
    commonProps,
    render: (value, setValue) =>
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
        ...commonProps,
      }),
    inputValue,
    defaultValue: todayDate,
  });
};

export default DatePicker;
