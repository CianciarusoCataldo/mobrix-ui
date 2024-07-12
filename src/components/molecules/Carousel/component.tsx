import React from "react";
import { CarouselProps, MbxUiReactiveComponent } from "../../../types";

import { IconButton } from "../../atoms";
import { ArrowIcon } from "../../../icons";

const CarouselComponent: MbxUiReactiveComponent<number, CarouselProps> = ({
  value: selectedItem,
  setValue: setItem,
  onChange = () => {},
  elements = [],
  dark,
  disabled,
  arrowClassName,
  dotClassName,
  hover,
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
          scl={`csdot;bdtran;full-${
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

  const arrowProps = {
    dark,
    hover,
    features: { noShFc: true, fillFc: true },
    className: arrowClassName,
  };

  return [
    <div key="car_els" data-mbx-scl="flxr;car-els">
      <IconButton
        key="prev-ar"
        additionalProps={{
          "data-mbx-arrow": "prev",
        }}
        disabled={item === 0 || disabled}
        onClick={() => {
          setActiveClassname("from-left");
          updateItem(item - 1);
        }}
        {...arrowProps}
      >
        <ArrowIcon />
      </IconButton>
      {elementsArray}
      <IconButton
        key="next-ar"
        additionalProps={{
          "data-mbx-arrow": "next",
        }}
        disabled={item === elements.length - 1 || disabled}
        onClick={() => {
          setActiveClassname("from-right");
          updateItem(item + 1);
        }}
        {...arrowProps}
      >
        <ArrowIcon />
      </IconButton>
    </div>,
    <div key="car_dots" data-mbx-scl="flxr;cdots;ovhid">
      {dots}
    </div>,
  ];
};

export default CarouselComponent;
