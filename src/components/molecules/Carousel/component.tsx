import React from "react";
import { CarouselProps, MbxUiReactiveComponent } from "../../../types";

import { arrowIcon } from "./icons";

import { IconButton } from "../../atoms";

const CarouselComponent: MbxUiReactiveComponent<number, CarouselProps> = ({
  value: selectedItem,
  setValue: setItem,
  onChange = () => {},
  elements = [],
  dark,
  disabled,
  arrowClassName,
  dotClassName,
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
        </div>,
      );

      dots.push(
        <IconButton
          additionalProps={{
            "data-mbx-class": "dot",
            "data-mbx-test": `dot_${index}`,
          }}
          className={dotClassName}
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
        </IconButton>,
      );
    });
  }

  return [
    <div data-mbx-class="elements" key="mobrix_ui_carousel_elements">
      <IconButton
        hover
        dark={dark}
        additionalProps={{
          "data-mbx-arrow": "prev",
        }}
        disabled={item === 0 || disabled}
        className={arrowClassName}
        onClick={() => {
          setActiveClassname("from-left");
          updateItem(item - 1);
        }}
      >
        {arrowIcon}
      </IconButton>
      {elementsArray}
      <IconButton
        hover
        dark={dark}
        additionalProps={{
          "data-mbx-arrow": "next",
        }}
        className={arrowClassName}
        disabled={item === elements.length - 1 || disabled}
        onClick={() => {
          setActiveClassname("from-right");
          updateItem(item + 1);
        }}
      >
        {arrowIcon}
      </IconButton>
    </div>,
    <div key="mobrix_ui_carousel_dots" data-mbx-class="dots">
      {dots}
    </div>,
  ];
};

export default CarouselComponent;
