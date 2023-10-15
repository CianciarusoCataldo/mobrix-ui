import {
  BuilderComponent,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Spinner component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Spinner
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type SpinnerProps<T extends string = string> = ComponentWithValue<T> & {
  /** custom statuses, to map every icon in a custom way */
  statuses?: Record<T, BuilderComponent>;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Spinner component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Spinner
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type SpinnerComponent<T extends string = string> = MoBrixUiComponent<
  SpinnerProps<T>
>;
