import {
  BuilderComponent,
  ComponentWithCallback,
  ComponentWithIcon,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../../utils/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Toggle component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Toggle
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ToggleProps = ComponentWithValue<boolean> &
  ComponentWithIcon &
  ComponentWithCallback<boolean> & {
    offIcon?: BuilderComponent;
    onIcon?: BuilderComponent;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Toggle component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Toggle
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ToggleComponent = MoBrixUiComponent<ToggleProps>;
