import {
  BuilderComponent,
  ComponentWithChildren,
  MoBrixUiComponent,
} from "../../../utils/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Drawer component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Drawer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type DrawerProps = ComponentWithChildren<
  BuilderComponent | BuilderComponent[]
> & {
  /** Callback triggered on Drawer close */
  onClose?: () => void;

  /** Drawer position, relative to entire window */
  position?:
    | "right"
    | "left"
    | "top"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Drawer component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Drawer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type DrawerComponent = MoBrixUiComponent<DrawerProps>;
