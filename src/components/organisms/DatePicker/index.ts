import "./styles.css";

import { CalendarDate, DatePickerComponent } from "../../../types";

import { buildMbxReactiveComponent } from "../../../tools";

import { today } from "../Calendar/utils";

import datePickerComponent from "./components";

/**
 *  A smart date-picker, with an internal Calendar accessible to choose a date
 *
 * @param {CalendarDate} value Actual selected date - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar Calendar}
 * @param {boolean} hideArrows If `true`, hide arrow buttons near the date label - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar Calendar}
 * @param {string[]} days Custom days labels - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar Calendar}
 * @param {string[]} months Custom months labels - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar Calendar}
 * @param {(date: CalendarDate) => void} onViewChange Callback triggered when the Calendar view (the displayed month) is changed - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar Calendar}
 * @param {number} startYear Initial displayed year - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar Calendar}
 * @param {number} startMonth Initial displayed month - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar Calendar}
 * @param {boolean} fromToday If `false`, prevent the user to select a date lower than today date - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar Calendar}
 * @param {string} dayLabel Show/hide actual day label on top of the calendar - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar Calendar}
 * @param {string} labelClassName Custom className applied on the day label component - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar Calendar}
 * @param {Record<string, any>} labelProps Custom props applied on the day label component - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar Calendar}
 * @param {(newValue: CalendarDate) => void} onChange Callback triggered when Calendar component input value is changed by the user - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar Calendar}
 * @param {() => void} onClose Callback triggered when DatePicker modal is closed
 * @param {string} key - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - React key, the standard [key parameter](https://reactjs.org/docs/lists-and-keys.html)
 * @param {string} className - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - custom className applied on main container
 * @param {boolean} dark - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable dark mode
 * @param {boolean} hide - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Hide/show component
 * @param {string} id - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - [id parameter](https://www.w3schools.com/html/html_id.asp) (for styling/testing purpose, to easily find the component into the DOM)
 * @param {boolean} shadow - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable shadow behind component
 * @param {CSSProperties} style - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Css inline properties applied on main container
 * @param {boolean} unstyled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons)
 * @param {boolean} animated - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component animations
 * @param {boolean} background - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component background
 * @param {boolean} hover - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component hover standard styles
 * @param {boolean} disabled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If true, disable the component. The effect may vary depending on the component type
 * @param {Record<string, any>} additionalProps - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom additional properties, applied to the component
 *
 *
 *
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/organisms/DatePicker
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since 2.0.0
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
const DatePicker: DatePickerComponent = ({
  /* istanbul ignore next */
  onClose = () => {},
  /* istanbul ignore next */
  onChange = () => {},
  value: inputValue,
  months,
  days,
  startMonth,
  startYear,
  hideArrows,
  fromToday,
  dayLabel,
  onViewChange,
  calendarProps = {},
  additionalProps,
  labelClassName,
  labelProps,
  ...commonProps
}) => {
  const todayDate = today();

  return buildMbxReactiveComponent<CalendarDate>(
    commonProps,
    (sharedProps) => ({
      name: "date-picker",
      commonProps: sharedProps,
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
          onClose,
          ...sharedProps,
        }),
      inputValue,
      defaultValue: todayDate,
      additionalProps,
    }),
  );
};

export default DatePicker;
