import {
  ComponentWithCallback,
  ComponentWithValue,
  GenericInputComponent,
  MoBrixUiComponent,
} from "../../../utils/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Input component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Input
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type InputProps = GenericInputComponent &
  ComponentWithValue<string> &
  ComponentWithCallback;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Input component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Input
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type InputComponent = MoBrixUiComponent<InputProps>;
