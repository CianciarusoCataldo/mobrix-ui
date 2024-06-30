import {
  BuilderComponent,
  ComponentWithCallback,
  ComponentWithIcon,
  ComponentWithValue,
  MbxUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Toggle component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Toggle
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type ToggleProps = ComponentWithValue<boolean> &
  ComponentWithIcon &
  ComponentWithCallback<boolean> & {
    /** custom toggle "off" icon (`value` === `false`) */
    offIcon?: BuilderComponent;

    /** custom toggle "on" icon (`value` === `true`) */
    onIcon?: BuilderComponent;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Toggle component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Toggle
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type ToggleComponent = MbxUiComponent<ToggleProps>;
