import "./styles.css";

import { CarouselComponent } from "./types";

import { buildMobrixUiReactiveComponent } from "../../../utils";

import carouselComponent from "./component";

/**
 * A compact carousel, to show any component (or image) into a slide, with dots and arrow button to go next/previous
 *
 * @since 1.0.0
 *
 * @param {(string | JSX.Element | Element)[]} elements carousel elements
 * @param {string} className `common MoBrix-ui prop` - custom className
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component, enabling or not MoBrix-ui custom styles
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component
 * @param {boolean} animated `common MoBrix-ui prop` enable/disable component animations
 * @param {string} key `common MoBrix-ui prop` custom component React key (the standard {@link https://reactjs.org/docs/lists-and-keys.html key parameter})
 * @param {boolean} a11y `common MoBrix-ui prop` enable/disable accessibility features
 * @param {boolean} a11yDark `common MoBrix-ui prop` if the `a11y` parameter is `true`, override standard focus color style with/without dark mode (normally, the color changes accordingly to the `dark` parameter)
 * @param {string} a11yLabel `common MoBrix-ui prop` if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label aria-label}
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
  return buildMobrixUiReactiveComponent<number>({
    name: "mobrix-ui-carousel",
    commonProps,
    defaultValue: 0,
    inputValue: value,
    props: (selectedItem, setItem) => ({
      Component: carouselComponent({
        value: selectedItem,
        setValue: setItem,
        onChange,
        elements: actualElements,
        dark: commonProps.dark,
      }),
    }),
  });
};

export default Carousel;
