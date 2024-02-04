import {
  ComponentWithChildren,
  MoBrixUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Container component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Container
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type ContainerProps = ComponentWithChildren<any> & {
  /** component wrapper type ("div" | "header" | "footer") */
  wrapper?: "div" | "header" | "footer";

  additionalProps?: Record<string, any>
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Container component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Container
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type ContainerComponent = MoBrixUiComponent<ContainerProps>;
