import "./styles.css";

import { CarouselComponent } from "./types";

import { withMobrixUiValue } from "../../../utils";

import carouselComponent from "./component";

/**
 * A compact carousel, to show any component (or image) into a slide, with dots and arrow button to go next/previous
 *
 * @since 1.0.0
 *
 * @param {(string | JSX.Element | Element)[]} elements carousel elements
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Carousel usage</caption>
 * import { render } from "react-dom";
 * import { Carousel } from 'mobrix-ui';
 *
 * render(<Carousel elements={[<div>Element 0</div>,<div>Element 1</div>]} value={1} />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Carousel
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Carousel: CarouselComponent = ({
  elements: actualElements,
  onChange,
  value,
  ...commonProps
}) => {
  return withMobrixUiValue<number>({
    name: "mobrix-ui-carousel",
    commonProps,
    defaultValue: 0,
    inputValue: value,
    props: (selectedItem, setItem) => {
      return {
        Component: carouselComponent({
          value: selectedItem,
          setValue: setItem,
          onChange,
          elements: actualElements,
          dark: commonProps.dark,
        }),
      };
    },
  });
};

export default Carousel;
