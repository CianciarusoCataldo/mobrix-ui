import {
  BuilderComponent,
  ComponentWithCallback,
  MoBrixUiComponent,
} from "../../../types";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} List component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/List
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ListProps = ComponentWithCallback<number> & {
  /** List elements (if unstyled == `false`, every element will include a dot at its start) */
  elements?: BuilderComponent[];
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} List component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/List
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ListComponent = MoBrixUiComponent<ListProps>;
