import React from "react";
import { CarouselProps, MobrixUiReactiveComponent } from "../../../types";

import { ICONS } from "../../atoms/Rater/icons";
import { arrowIcon } from "./icons";

import { Button } from "../../atoms";

const CarouselComponent: MobrixUiReactiveComponent<number, CarouselProps> = ({
  value: selectedItem,
  setValue: setItem,
  onChange = () => { },
  elements = [],
  dark,
}) => {
  const [activeClassName, setActiveClassname] = React.useState("");
  const [hoveredDot, setHoveredDot] = React.useState<number | null>(null);

  let dots: JSX.Element[] = [];
  let elementsArray: JSX.Element[] = [];
  const item =
    Number(selectedItem) < elements.length ? Number(selectedItem) : 0;
  const updateItem = (newItem: number) => {
    onChange(newItem);
    setItem(newItem);
  };

  if (elements.length > 0) {
    elements.forEach((element, index) => {
      elementsArray.push(
        <div
          key={`carousel_element_${index}`}
          data-mobrix-ui-hide={index !== item}
          data-mobrix-ui-class="element"
          data-mobrix-ui-animation={index === item ? activeClassName : ""}
          className={index === item ? activeClassName : ""}
        >
          {element}
        </div>
      );

      dots.push(
        <Button
          additionalProps={{
            "data-mobrix-ui-class": "dot",
            "data-mobrix-ui-test": `dot_${index}`
          }}
          unstyled
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

  return [
    <div data-mobrix-ui-class="elements" key="mobrix_ui_carousel_elements">
      <Button
        dark={dark}
        additionalProps={{
          "data-mobrix-ui-arrow": "prev",
          "data-mobrix-ui-test": "left_arrow"
        }}
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
        dark={dark}
        unstyled
        additionalProps={{
          "data-mobrix-ui-arrow": "next",
          "data-mobrix-ui-test": "right_arrow"
        }}
        disabled={item === elements.length - 1}
        onClick={() => {
          setActiveClassname("from-right");
          updateItem(item + 1);
        }}
      >
        {arrowIcon}
      </Button>
    </div>,
    <div key="mobrix_ui_carousel_dots" data-mobrix-ui-class="dots">{dots}</div>,
  ];
};

export default CarouselComponent;
