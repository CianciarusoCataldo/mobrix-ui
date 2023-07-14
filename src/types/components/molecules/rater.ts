import {
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Rater component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Rater
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type RaterProps = ComponentWithValue<number> &
  ComponentWithCallback<number> & {
    /** if true, rate icons will be showed vertically (default `false` - `horizontal`) */
    vertical?: boolean;

    /** max vote (max number of icons showed) */
    max?: number;

    /** vote icons type */
    type?: "star" | "circle";

    /** if true, the rate can't be changed by clicking on the icons */
    readonly?: boolean;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Rater component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Rater
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type RaterComponent = MoBrixUiComponent<RaterProps>;
