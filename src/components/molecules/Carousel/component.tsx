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
  arrowClassName,
  dotClassName,
  hover,
  active,
  a11y,
}) => {
  const [anim, setAnim] = React.useState("");
  let dots: JSX.Element[] = [];
  let res: JSX.Element[] = [];
  const item = Number(value) < elements.length ? Number(value) : 0;
  const setItem = (newItem: number) => {
    onChange(newItem);
    setValue(newItem);
  };
  const sProps = { a11y, dark, disabled };

  elements.forEach((element, index) => {
    const isSel = index === item;

    res.push(
      <Container
        unstyled
        key={`cr_el_${index}`}
        hide={!isSel}
        style={
          isSel && anim.length > 0
            ? ({
                "--mbx-car-an": `slide-in-${anim}`,
              } as React.CSSProperties)
            : undefined
        }
        {...sProps}
      >
        {element}
      </Container>,
    );
    dots.push(
      <IconButton
        style={
          isSel && {
            background: "var(--mbx-bgh",
          }
        }
        features={{ opFc: !isSel, wAll: !isSel }}
        hover={hover && !isSel}
        active={active && !isSel}
        className={dotClassName}
        key={`dot_${index}`}
        onClick={() => {
          setAnim(index > item ? "right" : "left");
          setItem(index);
        }}
        {...sProps}
      />,
    );
  });

  const Arrow = ({
    cond = item === 0,
    dir = "left",
    onClick = () => {
      setItem(item - 1);
    },
    revX = false,
  }) => (
    <IconButton
      key={`${dir}-arr`}
      {...sProps}
      disabled={disabled || cond}
      active={active}
      className={arrowClassName}
      hover={hover}
      onClick={() => {
        setAnim(dir);
        onClick();
      }}
    >
      <ArrowIcon reverseX={revX} style={{ ...(cond && { fill: "none" }) }} />
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
        revX
      />
    </div>,
    <div key="car_dots" data-mbx-cdots="">
      {dots}
    </div>,
  ];
};

export default Component;
