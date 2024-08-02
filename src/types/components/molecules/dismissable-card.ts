import { ClosableComponent, MbxUiComponent } from "../../../types/global";

import { CardProps } from "./card";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Dismissable Card component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/DismissableCard
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type DismissableCardProps = CardProps &
  ClosableComponent & {
    /** If `true`, the DismissableCard won't disappear if the X icon is clicked (can be hidden with `hide` shared prop) */
    alwaysVisible?: boolean;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Dismissable Card component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/DismissableCard
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type DismissableCardComponent = MbxUiComponent<DismissableCardProps>;
