import { ComponentWithIcon, MbxUiComponent } from "../../../types/global";

import { RaterProps } from "./rater";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Review component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Review
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type ReviewProps = ComponentWithIcon & {
  /** username showed above the review description, at the right of the icon */
  user?: string;

  /** review description showed below the review username, at the top of the rate */
  description?: string;

  /** max max vote (max number of rate icons showed) */
  max?: number;

  /** review external url. If set, an icon will be showed at the top right of the review */
  url?: string;

  /** Top icon, displayed at the top right of the container. If not provided, a default icon is displayed (if an url is provided too) */
  logo?: React.JSX.Element | string;

  /** review vote, showed at the bottom of the review */
  rate?: number;

  /** review vote icon type, to choose which icon will be used to show the review rate (allowed icons type are `stars` and `circle`) */
  rateType?: RaterProps["type"];
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Review component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Review
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type ReviewComponent = MbxUiComponent<ReviewProps>;
