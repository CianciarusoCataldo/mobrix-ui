import React from "react";
import { CarouselProps, MbxUiReactiveComponent } from "../../../types";

import { IconButton } from "../../atoms";
import { ArrowIcon } from "../../../icons";
import Container from "../Container";

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
        <Container
          unstyled
          dark={dark}
          key={`car_el_${index}`}
          hide={index !== item}
          mbxClass="el"
          props={{
            "data-mbx-animation": index === item ? activeClassName : "",
          }}
        >
          {element}
        </Container>,
      );

      dots.push(
        <IconButton
          dark={dark}
          scl="bdtran"
          features={{ noShFc: true, fillFc: true }}
          props={{
            "data-mbx-cdot":
              index === item || (hoveredDot != null && index === hoveredDot),
          }}
          mbxClass="csdot"
          className={dotClassName}
          disabled={disabled}
          key={`dot_${index}`}
          onMouseEnter={() => setHoveredDot(index)}
          onMouseLeave={() => setHoveredDot(null)}
          onClick={() => {
            setActiveClassname(index > item ? "from-right" : "from-left");
            updateItem(index);
          }}
        />,
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
    <div key="car_els" data-mbx-cls="car-els" data-mbx-scl="flxr">
      <IconButton
        dark={dark}
        key="prev-ar"
        mbxClass="aprev"
        disabled={disabled || item === 0}
        onClick={() => {
          setActiveClassname("from-left");
          updateItem(item - 1);
        }}
        {...arrowProps}
      >
        <ArrowIcon
          disabled={item === 0}
          fill={item === 0 ? "none" : "var(--mbx-c-car-arr)"}
        />
      </IconButton>
      {elementsArray}
      <IconButton
        dark={dark}
        key="next-ar"
        mbxClass="anext"
        disabled={disabled || item === elements.length - 1}
        onClick={() => {
          setActiveClassname("from-right");
          updateItem(item + 1);
        }}
        {...arrowProps}
      >
        <ArrowIcon
          disabled={item === elements.length - 1}
          fill={item === elements.length - 1 ? "none" : "var(--mbx-c-car-arr)"}
        />
      </IconButton>
    </div>,
    <div key="car_dots" data-mbx-cls="cdots" data-mbx-scl="flxr;ovhid">
      {dots}
    </div>,
  ];
};

export default CarouselComponent;
