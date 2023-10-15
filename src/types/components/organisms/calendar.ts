import {
  ComponentWithCallback,
  ComponentWithValue,
  DeepPartial,
  MoBrixUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Calendar date object
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export interface CalendarDate {
  /** Calendar date month (0-11) */
  month: number;

  /** Calendar date year */
  year: number;

  /** Calendar date day (1 to month length) */
  day: number;
}

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Calendar shared props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export interface CalendarSharedProps {
  /** custom months labels (default use english months) */
  months?: string[];

  /** custom days labels (default use english days) */
  days?: string[];
}

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Calendar component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type CalendarProps = ComponentWithValue<DeepPartial<CalendarDate>> &
  ComponentWithCallback<CalendarDate> &
  CalendarSharedProps & {
    /** show/hide arrow buttons */
    hideArrows?: boolean;

    /** starting displayed year (default today year) */
    startYear?: number;

    /** if true, prevent the user to select onnly a date greater or equal to today date */
    fromToday?: boolean;

    /**starting displayed month (default today month) */
    startMonth?: number;

    /** show/hide actual day label on top of the calendar */
    dayLabel?: boolean;

    /** callback called when the Calendar view (the showed month) change */
    onViewChange?: (date: CalendarDate) => void;

    labelClassName?: string;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Calendar component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type CalendarComponent = MoBrixUiComponent<CalendarProps>;
