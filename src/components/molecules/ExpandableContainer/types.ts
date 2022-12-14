import {
  BuilderComponent,
  ComponentWithCallback,
  MoBrixUiComponent,
} from "../../../utils/global";
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
export type ExpandableContainerProps = ContainerProps &
  ComponentWithCallback<boolean> & {
    /** if true, the full container is showed (if false, the expanded area is hidden) */
    compact?: boolean;
    expanded?: BuilderComponent;
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
