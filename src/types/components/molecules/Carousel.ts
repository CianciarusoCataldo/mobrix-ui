import {
  BuilderComponent,
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../../types";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Carousel component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Carousel
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CarouselProps = ComponentWithValue<number> &
  ComponentWithCallback<number> & {
    /** Carousel elements */
    elements?: BuilderComponent[];
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Carousel component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Carousel
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CarouselComponent = MoBrixUiComponent<CarouselProps>;
