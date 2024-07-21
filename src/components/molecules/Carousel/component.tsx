import React from "react";
import { CarouselProps, MbxUiReactiveComponent } from "../../../types";

import { IconButton } from "../../atoms";
import { ArrowIcon } from "../../../icons";
import Container from "../Container";

const CarouselComponent: MbxUiReactiveComponent<number, CarouselProps> = ({
  value,
  setValue,
  onChange = () => {},
  elements = [],
  dark,
  disabled,
  arrowClassName: arrCl,
  dotClassName: dotCl,
  hover,
  active,
}) => {
  const [anim, setAnim] = React.useState("");
  const [hoveredDot, setHoveredDot] = React.useState<number | null>(null);

  let dots: JSX.Element[] = [];
  let res: JSX.Element[] = [];
  const item = Number(value) < elements.length ? Number(value) : 0;
  const setItem = (newItem: number) => {
    onChange(newItem);
    setValue(newItem);
  };

  if (elements.length > 0) {
    elements.forEach((element, index) => {
      const estyle =
        index === item && anim.length > 0
          ? ({
              "--mbx-car-an": anim,
            } as React.CSSProperties)
          : undefined;

      res.push(
        <Container
          unstyled
          dark={dark}
          key={`car_el_${index}`}
          hide={index !== item}
          style={estyle}
        >
          {element}
        </Container>,
      );
      dots.push(
        <IconButton
          dark={dark}
          style={{
            background: `var(--mbx-car-dot-${
              index === item || (hoveredDot != null && index === hoveredDot)
                ? "f"
                : "e"
            })`,
          }}
          hover={hover}
          className={dotCl}
          disabled={disabled}
          key={`dot_${index}`}
          onMouseEnter={() => setHoveredDot(index)}
          onMouseLeave={() => setHoveredDot(null)}
          onClick={() => {
            setAnim(index > item ? "slide-in-right" : "slide-in-left");
            setItem(index);
          }}
        />,
      );
    });
  }

  const Arrow = ({
    cond = item === 0,
    dir = "left",
    onClick = () => {
      setItem(item - 1);
    },
    arrStyle = {},
  }) => (
    <IconButton
      key={`${dir}-arr`}
      disabled={disabled || cond}
      dark={dark}
      hover={hover}
      active={active}
      className={arrCl}
      onClick={() => {
        setAnim(`slide-in-${dir}`);
        onClick();
      }}
    >
      <ArrowIcon
        hover={hover}
        dark={dark}
        disabled={cond}
        hide={cond}
        style={arrStyle}
      />
    </IconButton>
  );

  return [
    <div key="car_els" data-mbx-car-els="">
      <Arrow />
      {res}
      <Arrow
        dir="right"
        cond={item === elements.length - 1}
        onClick={() => {
          setItem(item + 1);
        }}
        arrStyle={{
          WebkitTransform: "scaleX(-1)",
          transform: "scaleX(-1)",
        }}
      />
    </div>,
    <div key="car_dots" data-mbx-cdots="">
      {dots}
    </div>,
  ];
};

export default CarouselComponent;
