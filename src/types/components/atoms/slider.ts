import {
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
  NumericInputComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Slider component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Slider
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type SliderProps = ComponentWithValue<number> &
  ComponentWithCallback<number> &
  Omit<NumericInputComponent, "placeholder"> & {
    /** Slider thumb custom color (exadecimal or any gradient css attribute). If set, the standard style is overwritten */
    thumbColor?: string;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Slider component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Slider
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type SliderComponent = MoBrixUiComponent<SliderProps>;
