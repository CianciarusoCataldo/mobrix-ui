import { MbxUiComponent } from "../../global";
import { InputProps } from "./input";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Input component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Input
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type PasswordProps = InputProps & { show?: boolean };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Input component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Input
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type PasswordComponent = MbxUiComponent<PasswordProps>;
