import {
  AnimatedComponent,
  BuilderComponent,
  ClickableComponent,
  ComponentWithChildren,
  MoBrixUiComponent,
} from "../../../utils/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Button component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Button
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 * */
export type ButtonProps = ComponentWithChildren<
  BuilderComponent | BuilderComponent[]
> &
  AnimatedComponent &
  ClickableComponent & {
    /**callback triggered when the cursor enter the component */
    onMouseEnter?: () => void;

    /** callback triggered when the cursor exit the component */
    onMouseLeave?: () => void;

    /**enable or disable the button functionalities (UI will reflect it too) */
    disabled?: boolean;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Button component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Button
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ButtonComponent = MoBrixUiComponent<ButtonProps>;
