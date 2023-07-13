import {
  ComponentWithChildren,
  MoBrixUiComponent,
} from "../../global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Label component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Label
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type LabelProps = ComponentWithChildren<string | string[]>;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Label component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Label
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type LabelComponent = MoBrixUiComponent<LabelProps>;
