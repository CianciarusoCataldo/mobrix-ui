import {
  ClosableComponent,
  CommonProps,
  ComponentWithCallback,
  ComponentWithValue,
  MbxUiComponent,
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
  ClosableComponent &
  CalendarProps & {
    /** MoBrix-ui sharedProps applied on the internal calendar */
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
export type DatePickerComponent = MbxUiComponent<DatePickerProps>;
