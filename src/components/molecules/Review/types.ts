import {
  BoxComponent,
  CommonProps,
  MoBrixUiComponent,
} from "../../../utils/global";
import { RaterProps } from "../Rater/types";

export type ReviewLogo =
  | "default"
  | "facebook"
  | "twitter"
  | "google"
  | "linkedin"
  | "github";

export type ReviewProps = CommonProps &
  BoxComponent<number> & {
    user?: string;
    description?: string;
    max?: number;
    url?: string;
    logo?: ReviewLogo;
    rateType?: RaterProps["type"];
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Rater component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Rater
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ReviewComponent = MoBrixUiComponent<ReviewProps>;
