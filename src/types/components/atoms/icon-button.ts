import {
  BuilderComponent,
  ClickableComponent,
  ComponentWithChildren,
  MbxUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} IconButton component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/IconButton
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 * */
export type IconButtonProps = ComponentWithChildren<BuilderComponent> &
  ClickableComponent & {
    /**callback triggered when the cursor enter the component */
    onMouseEnter?: () => void;

    /** callback triggered when the cursor exit the component */
    onMouseLeave?: () => void;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} IconButton component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/IconButton
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type IconButtonComponent = MbxUiComponent<IconButtonProps>;
