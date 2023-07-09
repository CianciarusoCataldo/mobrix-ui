import {
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../global";
import { CalendarDate, CalendarProps } from "./Calendar";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} DatePicker props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/DatePicker
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type DatePickerProps = ComponentWithCallback<CalendarDate> &
  ComponentWithValue<CalendarDate> &
  CalendarProps;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} DatePicker component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/DatePicker
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type DatePickerComponent = MoBrixUiComponent<DatePickerProps>;
