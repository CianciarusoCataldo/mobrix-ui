import { MoBrixUiComponent } from "../../global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} FacebookButtons component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/FacebookButtons
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type FacebookButtonsProps = {
  /** facebook page-id */
  pageId: string;

  /** show/hide share button */
  share?: boolean;

  /** show small/big sized component */
  small?: boolean;

  /** custom component width */
  width?: number;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} FacebookButtons component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/FacebookButtons
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type FacebookButtonsComponent = MoBrixUiComponent<FacebookButtonsProps>;
