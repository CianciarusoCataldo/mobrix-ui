import {
  BuilderComponent,
  ClickableComponent,
  ComponentWithChildren,
  MoBrixUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Button component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Button
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 * */
export type ButtonProps<T = BuilderComponent | BuilderComponent[]> =
  ComponentWithChildren<T> &
    ClickableComponent & {
      /**callback triggered when the cursor enter the component */
      onMouseEnter?: () => void;

      /** callback triggered when the cursor exit the component */
      onMouseLeave?: () => void;
    };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Button component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Button
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type ButtonComponent = MoBrixUiComponent<ButtonProps>;
