import React from "react";
import { CarouselProps, MbxUiReactiveComponent } from "../../../types";

import { IconButton } from "../../atoms";
import { ArrowIcon } from "../../../icons";
import Container from "../Container";

const Component: MbxUiReactiveComponent<number, CarouselProps> = ({
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
  let dots: JSX.Element[] = [];
  let res: JSX.Element[] = [];
  const item = Number(value) < elements.length ? Number(value) : 0;
  const setItem = (newItem: number) => {
    onChange(newItem);
    setValue(newItem);
  };

  if (elements.length > 0) {
    elements.forEach((element, index) => {
      const isSel = index === item;

      res.push(
        <Container
          unstyled
          dark={dark}
          key={`car_el_${index}`}
          hide={!isSel}
          style={
            isSel && anim.length > 0
              ? ({
                  "--mbx-car-an": anim,
                } as React.CSSProperties)
              : undefined
          }
        >
          {element}
        </Container>,
      );
      dots.push(
        <IconButton
          dark={dark}
          style={
            (isSel && {
              background: "var(--mbx-car-dot-f",
            }) as React.CSSProperties
          }
          features={{ opFc: !isSel }}
          hover={hover && !isSel}
          active={active && !isSel}
          className={dotCl}
          disabled={disabled}
          key={`dot_${index}`}
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
      active={active}
      className={arrCl}
      hover={hover}
      dark={dark}
      onClick={() => {
        setAnim(`slide-in-${dir}`);
        onClick();
      }}
    >
      <ArrowIcon style={{ ...arrStyle, ...(cond && { fill: "none" }) }} />
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

export default Component;
