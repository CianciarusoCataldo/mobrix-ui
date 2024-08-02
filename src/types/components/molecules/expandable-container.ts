import {
  BuilderComponent,
  ComponentWithCallback,
  MbxUiComponent,
} from "../../../types/global";

import { ContainerProps } from "./container";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Expandable Container component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Container
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type ExpandableContainerProps = ContainerProps &
  ComponentWithCallback<boolean> & {
    /** if true, the full container is displayed (if false, the expanded area is hidden) */
    compact?: boolean;

    /** Expanded area */
    expanded?: BuilderComponent | BuilderComponent[];

    /** Arrow icon position */
    arrowPosition?: "right" | "left" | "top" | "bottom";
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Expandable Container component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Container
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type ExpandableContainerComponent =
  MbxUiComponent<ExpandableContainerProps>;
