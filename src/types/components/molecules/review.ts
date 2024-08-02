import { ComponentWithIcon, MbxUiComponent } from "../../../types/global";

import { RaterProps } from "../atoms/rater";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Review component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Review
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type ReviewProps = ComponentWithIcon &
  Omit<RaterProps, "value" | "readOnly" | "onChange"> & {
    /** username showed above the review description, at the right of the icon */
    user?: string;

    /** review description showed below the review username, at the top of the rate */
    description?: string;

    /** review external url. If set, an icon will be showed at the top right of the review */
    url?: string;

    /** Top icon, displayed at the top right of the container. If not provided, a default icon is displayed (if an url is provided too) */
    logo?: React.JSX.Element | string;

    /** review vote, showed at the bottom of the review */
    rate?: number;
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
