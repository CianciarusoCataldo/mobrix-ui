import {
  ComponentWithCallback,
  MoBrixUiComponent,
  ComponentWithValue,
  ComponentWithIcon,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} CheckBox component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CheckBox
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type CheckBoxProps = ComponentWithValue<boolean> &
  ComponentWithIcon &
  ComponentWithCallback<boolean>;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} CheckBox component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CheckBox
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type CheckBoxComponent = MoBrixUiComponent<CheckBoxProps>;
