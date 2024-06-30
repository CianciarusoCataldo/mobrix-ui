import {
  BuilderComponent,
  ClickableComponent,
  MbxUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} List component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/List
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type ListProps = ClickableComponent<(index: number) => void> & {
  /** List elements (if unstyled == `false`, every element will include a dot at its start) */
  elements?: BuilderComponent[];
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} List component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/List
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type ListComponent = MbxUiComponent<ListProps>;
