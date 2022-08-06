import {
  CommonProps,
  ComponentWithCallback,
  BoxComponent,
  MoBrixUiComponent,
} from "../../../utils/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} CheckBox component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CheckBox
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CheckBoxProps = CommonProps &
  BoxComponent<boolean> &
  ComponentWithCallback<boolean>;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} CheckBox component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CheckBox
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CheckBoxComponent = MoBrixUiComponent<CheckBoxProps>;
