import { MoBrixUiComponent } from "../../../utils/global";
import { ContainerProps } from "../Container/types";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Expandable Container component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Container
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ExpandableContainerProps = ContainerProps & {
  compact?: boolean;
  expanded?: JSX.Element;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Expandable Container component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Container
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ExpandableContainerComponent =
  MoBrixUiComponent<ExpandableContainerProps>;
