import React from "react";
import { CarouselProps, MobrixUiReactiveComponent } from "../../../types";

import { arrowIcon } from "./icons";

import { Button } from "../../atoms";

const CarouselComponent: MobrixUiReactiveComponent<number, CarouselProps> = ({
  value: selectedItem,
  setValue: setItem,
  onChange = () => {},
  elements = [],
  dark,
  disabled,
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
          data-mbx-hide={index !== item}
          data-mbx-class="element"
          data-mbx-animation={index === item ? activeClassName : ""}
        >
          {element}
        </div>
      );

      dots.push(
        <Button
          additionalProps={{
            "data-mbx-class": "dot",
            "data-mbx-test": `dot_${index}`,
          }}
          unstyled
          disabled={disabled}
          key={`dot_${index}`}
          onMouseEnter={() => setHoveredDot(index)}
          onMouseLeave={() => setHoveredDot(null)}
          onClick={() => {
            setActiveClassname(index > item ? "from-right" : "from-left");
            updateItem(index);
          }}
        >
          <div
            data-mbx-class="carousel-dot-icon"
            data-mbx-icon-full={
              index === item || (hoveredDot != null && index === hoveredDot)
            }
          />
        </Button>
      );
    });
  }

  return [
    <div data-mbx-class="elements" key="mobrix_ui_carousel_elements">
      <Button
        dark={dark}
        additionalProps={{
          "data-mbx-arrow": "prev",
          "data-mbx-test": "left_arrow",
        }}
        unstyled
        disabled={item === 0 || disabled}
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
          "data-mbx-arrow": "next",
          "data-mbx-test": "right_arrow",
        }}
        disabled={item === elements.length - 1 || disabled}
        onClick={() => {
          setActiveClassname("from-right");
          updateItem(item + 1);
        }}
      >
        {arrowIcon}
      </Button>
    </div>,
    <div key="mobrix_ui_carousel_dots" data-mbx-class="dots">
      {dots}
    </div>,
  ];
};

export default CarouselComponent;
