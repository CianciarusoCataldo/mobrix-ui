import {
  ComponentWithCallback,
  ComponentWithValue,
  GenericInputComponent,
  MbxUiComponent,
} from "../../../types/global";
import { AutoResizableComponent } from "../../global/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Input component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Input
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type InputProps = GenericInputComponent & AutoResizableComponent &
  ComponentWithValue<string> &
  ComponentWithCallback;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Input component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Input
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type InputComponent = MbxUiComponent<InputProps>;
