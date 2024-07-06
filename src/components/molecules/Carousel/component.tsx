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
          key={`car_el_${index}`}
          {...(index !== item && {
            "data-mbx-atts": "hide;",
          })}
          data-mbx-scl="el"
          data-mbx-animation={index === item ? activeClassName : ""}
        >
          {element}
        </div>
      );

      dots.push(
        <IconButton
          data-mbx-scl={`dot;full-${
            index === item || (hoveredDot != null && index === hoveredDot)
          }`}
          className={dotClassName}
          disabled={disabled}
          key={`dot_${index}`}
          onMouseEnter={() => setHoveredDot(index)}
          onMouseLeave={() => setHoveredDot(null)}
          onClick={() => {
            setActiveClassname(index > item ? "from-right" : "from-left");
            updateItem(index);
          }}
        />
      );
    });
  }

  return [
    <div key="car_els" data-mbx-scl="flxr;car-els">
      <IconButton
        key="prev-ar"
        hover
        dark={dark}
        additionalProps={{
          "data-mbx-arrow": "prev",
        }}
        debug={{
          features: { noShadowOnFocus: true, fillOnFocus: true },
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
        key="next-ar"
        dark={dark}
        additionalProps={{
          "data-mbx-arrow": "next",
        }}
        debug={{
          features: { noShadowOnFocus: true, fillOnFocus: true },
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
    <div key="car_dots" data-mbx-scl="flxr;dots;">
      {dots}
    </div>,
  ];
};

export default CarouselComponent;
