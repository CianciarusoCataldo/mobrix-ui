import {
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
  NumericInputContent,
} from "../../../utils/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Counter component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Counter
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CounterProps = NumericInputContent &
  ComponentWithValue<number> &
  ComponentWithCallback<number>;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Counter component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Counter
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CounterComponent = MoBrixUiComponent<CounterProps>;
