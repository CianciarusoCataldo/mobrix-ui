import {
  ComponentWithChildren,
  MbxUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Container component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Container
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type ContainerProps = ComponentWithChildren<any> & {
  /** component wrapper type ("div" | "header" | "footer") */
  wrapper?: "div" | "header" | "footer";
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Container component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Container
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type ContainerComponent = MbxUiComponent<ContainerProps>;
