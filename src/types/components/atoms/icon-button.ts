import { BuilderComponent, MoBrixUiComponent } from "../../../types/global";
import { ButtonProps } from "./button";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} IconButton component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/IconButton
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 * */
export type IconButtonProps = ButtonProps<BuilderComponent>;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} IconButton component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/IconButton
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type IconButtonComponent = MoBrixUiComponent<IconButtonProps>;
