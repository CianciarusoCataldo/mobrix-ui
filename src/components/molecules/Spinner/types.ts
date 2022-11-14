import {
  BoxComponent,
  BuilderComponent,
  CommonProps,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../../utils/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Spinner component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Spinner
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type SpinnerProps<T extends string = string> = CommonProps &
  ComponentWithValue<T> & {
    statuses?: Record<T, BuilderComponent>;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Spinner component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Spinner
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type SpinnerComponent<T extends string = string> = MoBrixUiComponent<
  SpinnerProps<T>
>;
