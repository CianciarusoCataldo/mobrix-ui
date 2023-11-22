import {
  CommonProps,
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../../types/global";

import { CalendarDate, CalendarProps } from "./calendar";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} DatePicker props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/DatePicker
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type DatePickerProps = ComponentWithCallback<CalendarDate> &
  ComponentWithValue<CalendarDate> &
  CalendarProps & {
    calendarProps?: CommonProps;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} DatePicker component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/DatePicker
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type DatePickerComponent = MoBrixUiComponent<DatePickerProps>;
