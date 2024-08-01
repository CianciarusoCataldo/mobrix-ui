import "./styles.css";

import { CalendarComponent, CalendarDate, DeepPartial } from "../../../types";

import { today } from "./utils";

import { buildMbxReactive } from "../../../tools/utils";

import component from "./component";

/**
 * A ready to use Calendar, designed for a lot of scenarios.
 *
 * @param {CalendarDate} value Actual selected date
 * @param {boolean} hideArrows If `true`, hide arrow buttons near the date label
 * @param {string[]} days Custom days labels
 * @param {string[]} months Custom months labels
 * @param {(date: CalendarDate) => void} onViewChange Callback triggered when the Calendar view (the displayed month) is changed
 * @param {number} startYear Initial displayed year
 * @param {number} startMonth Initial displayed month
 * @param {boolean} fromToday If `false`, prevent the user to select a date lower than today date
 * @param {string} dayLabel Show/hide actual day label on top of the calendar
 * @param {string} labelClassName Custom className applied on the day label component
 * @param {Record<string, any>} labelProps Custom props applied on the day label component
 * @param {(newValue: CalendarDate) => void} onChange Callback triggered when Calendar component input value is changed by the user
 * @param {string} arrowClassName Custom classname applied on the arrow button
 * @param {string} key - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - React key, the standard [key parameter](https://reactjs.org/docs/lists-and-keys.html)
 * @param {string} className - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - custom className applied on main container
 * @param {boolean} dark - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable dark mode
 * @param {boolean} hide - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Hide/show component
 * @param {string} id - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - [id parameter](https://www.w3schools.com/html/html_id.asp) (for styling/testing purpose, to easily find the component into the DOM)
 * @param {boolean} shadow - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable shadow behind component
 * @param {CSSProperties} style - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Css inline properties applied on main container
 * @param {boolean} unstyled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons)
 * @param {boolean} animated - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component animations
 * @param {'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-top' | 'shake'} animation - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `animated`=`true`, this parameter specifies which animation is used when component is rendered
 * @param {boolean} background - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component background
 * @param {boolean} hover - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component hover standard styles
 * @param {boolean} active - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component click standard styles
 * @param {boolean} disabled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If true, disable the component. The effect may vary depending on the component type
 * @param {(keyEvent : any) => void} onKeyDown - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when a key is pressed while using the component (for example, when writing text inside an `Input` component).
 * @param {() => void} onFocus - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when the component get the focus (for example, through tab key)
 * @param {() => void} onFocusLost - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when the component lose the focus (for example, when user clicks outside it)
 * @param {Record<string, any>} props - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom additional properties, applied to the component
 * @param {boolean} a11y - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable accessibility features
 * @param {string} a11yLabel - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `a11y` = `true`, is used as [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) accessibility parameter
 * @param {number | string} tabIndex - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Regular [tabIndex a11y parameter](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex). If `a11y` = `true`, this parameter is passed as `tabIndex` prop to the component (if not set, its value will be `0`). If `a11y` = `false`, it is set to `-1` (so the component is not focusable through `tab` key`)
 *
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since 2.0.0
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
const Calendar: CalendarComponent = ({
  value: inpV,
  active = true,
  ...props
}) => {
  const tday = today();

  return buildMbxReactive<DeepPartial<CalendarDate>>(props, (mbxProps) => ({
    name: "cal",
    mbxProps: { ...mbxProps, a11y: false, shadow: false, active: false },
    inpV,
    defV: {
      year: tday.year,
      month: tday.month,
      day: tday.dayOfTheMonth,
    },
    Component: ({ value, setValue }) =>
      component({
        today: tday,
        value,
        setValue,
        ...props,
        ...mbxProps,
        active,
      }),
  }));
};

export default Calendar;
