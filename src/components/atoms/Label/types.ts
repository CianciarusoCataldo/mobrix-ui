import {
  BoxComponent,
  CommonProps,
  MoBrixUiComponent,
} from "../../../utils/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Label component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Label
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type LabelProps = Omit<
  BoxComponent<string | string[]>,
  "label" | "icon"
> &
  CommonProps;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Label component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Label
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type LabelComponent = MoBrixUiComponent<LabelProps>;
