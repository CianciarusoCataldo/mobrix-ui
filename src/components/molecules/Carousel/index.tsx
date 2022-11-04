import "./styles.css";

import React from "react";
import classNames from "classnames";

import { CarouselComponent } from "./types";

import { ICONS } from "../Rater/icons";

import { buildBoxComponent } from "../../../utils";

import Button from "../../atoms/Button";
import { arrowIcon } from "./icons";

/**
 * A compact carousel, to show any component (or image) into a slide, with dots and arrow button to go next/previous
 *
 * @since 1.0.0
 *
 * @param {(string | JSX.Element | Element)[]} elements carousel elements
 * @param {JSX.Element | string} label `common MoBrix-ui prop` - Component top label
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
  label,
  onChange,
  value,
  ...commonProps
}) => {

  const [activeClassName, setActiveClassname] = React.useState("");
  const [hoveredDot, setHoveredDot] = React.useState<number | null>(null);

  return buildBoxComponent<number>({
    callBack: (item, setItem) => {
      let dots: JSX.Element[] = [];
      let elementsArray: JSX.Element[] = [];
      const elements = actualElements || [];
      const updateItem = (newItem: number) => {
        onChange && onChange(newItem);
        setItem(newItem);
      };

      if (elements && elements.length > 0) {
        elements.forEach((element, index) => {
          elementsArray.push(
            <div
              key={`carousel_element_${index}`}
              className={classNames("element", {
                "component-hidden": index !== item,
                [activeClassName]: index === item,
              })}
            >
              {element}
            </div>
          );

          dots.push(
            <Button
              className="dot"
              unstyled
              id={`dot_${index}`}
              key={`dot_${index}`}
              onMouseEnter={() => setHoveredDot(index)}
              onMouseLeave={() => setHoveredDot(null)}
              onClick={() => {
                setActiveClassname(index > item ? "from-right" : "from-left");
                updateItem(index);
              }}
            >
              {index === item || (hoveredDot != null && index === hoveredDot)
                ? ICONS.circle.FULL
                : ICONS.circle.EMPTY}
            </Button>
          );
        });
      }
      return {
        name: "mobrix-ui-carousel",
        Component: [
          <div className="elements" key="mobrix_ui_carousel_elements">
            <Button
              dark={commonProps.dark}
              id="left_arrow"
              className={classNames("arrow prev", {
                disabled: item === 0,
              })}
              unstyled
              disabled={item === 0}
              onClick={() => {
                setActiveClassname("from-left");
                updateItem(item - 1);
              }}
            >
              {arrowIcon}
            </Button>
            {elementsArray}
            <Button
              dark={commonProps.dark}
              unstyled
              className={classNames("arrow next", {
                disabled: item === elements.length - 1,
              })}
              id="right_arrow"
              disabled={item === elements.length - 1}
              onClick={() => {
                setActiveClassname("from-right");
                updateItem(item + 1);
              }}
            >
              {arrowIcon}
            </Button>
          </div>,
          <div key="mobrix_ui_carousel_dots">
            <div className="dots">{dots}</div>
          </div>,
        ],
        commonProps,
      };
    },
    label,
    defaultValue: 0,
  });
};

export default Carousel;
