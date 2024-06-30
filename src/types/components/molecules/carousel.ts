import {
  BuilderComponent,
  ComponentWithCallback,
  ComponentWithValue,
  MbxUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Carousel component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Carousel
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type CarouselProps = ComponentWithValue<number> &
  ComponentWithCallback<number> & {
    /** Carousel elements */
    elements?: BuilderComponent[];

    /** Custom classname applied on the Carousel arrows */
    arrowClassName?: string;

    /** Custom classname applied on every Carousel dot */
    dotClassName?: string;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Carousel component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Carousel
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type CarouselComponent = MbxUiComponent<CarouselProps>;
