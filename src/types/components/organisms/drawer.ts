import {
  BuilderComponent,
  ClosableComponent,
  ComponentWithChildren,
  MoBrixUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Drawer component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Drawer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type DrawerProps = ComponentWithChildren<
  BuilderComponent | BuilderComponent[]
> &
  ClosableComponent & {
    /** Drawer position, relative to the entire window */
    position?:
      | "right"
      | "left"
      | "top"
      | "bottom"
      | "top-left"
      | "top-right"
      | "bottom-left"
      | "bottom-right";
    closeOnClickOutside?: boolean;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Drawer component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Drawer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type DrawerComponent = MoBrixUiComponent<DrawerProps>;
