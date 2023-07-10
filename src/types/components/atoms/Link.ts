import {
  BuilderComponent,
  ComponentWithChildren,
  MoBrixUiComponent,
} from "../../global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Link component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Link
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type LinkProps = ComponentWithChildren<BuilderComponent> & {
  /** Link URL */
  to: string;

  /**if true, the link will be opened in a new tab */
  newTab?: boolean;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Link component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Link
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type LinkComponent = MoBrixUiComponent<LinkProps>;
