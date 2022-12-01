import {
  ClickableComponent,
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../../utils/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} RadioButton component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/RadioButton
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type RadioButtonProps = ComponentWithValue<boolean> &
  ComponentWithCallback<boolean> & {
    /** if `false`, the button can be selected only once (the value can't change then) */
    deselectable?: boolean;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} RadioButton component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/RadioButton
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type RadioButtonComponent = MoBrixUiComponent<RadioButtonProps>;
