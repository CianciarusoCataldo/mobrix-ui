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
      const estyle =
        index === item && activeClassName.length > 0
          ? ({
              "--mbx-car-an": activeClassName,
            } as React.CSSProperties)
          : undefined;

      elementsArray.push(
        <Container
          unstyled
          dark={dark}
          key={`car_el_${index}`}
          hide={index !== item}
          data-mbx-cls="el"
          style={estyle}
        >
          {element}
        </Container>
      );

      dots.push(
        <IconButton
          dark={dark}
          scl="bdtran"
          features={{ noShFc: true, fillFc: true, opFc: true }}
          style={{
            background: `var(--mbx-c-car-dot-${
              index === item || (hoveredDot != null && index === hoveredDot)
                ? "f"
                : "e"
            })`,
          }}
          data-mbx-cls="csdot"
          className={dotClassName}
          disabled={disabled}
          key={`dot_${index}`}
          onMouseEnter={() => setHoveredDot(index)}
          onMouseLeave={() => setHoveredDot(null)}
          onClick={() => {
            setActiveClassname(index > item ? "slideRight" : "slideLeft");
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
    <div key="car_els" data-mbx-cls="car-els" data-mbx-scl="flxr">
      <IconButton
        dark={dark}
        key="prev-ar"
        data-mbx-cls="aprev"
        disabled={disabled || item === 0}
        onClick={() => {
          setActiveClassname("slideLeft");
          updateItem(item - 1);
        }}
        {...arrowProps}
      >
        <ArrowIcon
          disabled={item === 0 || disabled}
          fill={item === 0 ? "none" : undefined}
        />
      </IconButton>
      {elementsArray}
      <IconButton
        dark={dark}
        key="next-ar"
        data-mbx-cls="anext"
        disabled={disabled || item === elements.length - 1}
        onClick={() => {
          setActiveClassname("slideRight");
          updateItem(item + 1);
        }}
        {...arrowProps}
      >
        <ArrowIcon
          disabled={item === elements.length - 1 || disabled}
          fill={item === elements.length - 1 ? "none" : undefined}
        />
      </IconButton>
    </div>,
    <div key="car_dots" data-mbx-cls="cdots" data-mbx-scl="flxr;ovhid">
      {dots}
    </div>,
  ];
};

export default CarouselComponent;
