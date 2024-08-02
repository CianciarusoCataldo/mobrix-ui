import React from "react";

import { BuilderComponent, ListProps, MbxUiComponent } from "../../../types";
import Container from "../Container";

const lComponent: MbxUiComponent<ListProps, BuilderComponent[]> = ({
  elements = [],
  dark,
  hover,
  onClick,
  disabled,
  active,
  a11y,
}) => {
  const cond = onClick !== undefined;

  return elements.map((element, index) => (
    <Container
      a11y={a11y}
      background={false}
      shadow={false}
      dark={dark}
      hover={cond && hover}
      key={`el_${index}`}
      {...(cond && {
        active: active,
        props: { onClick: () => onClick(index) },
        style: {
          cursor: "pointer",
        },
        onKeyDown: (e) => {
          if (e.code === "Enter") {
            onClick(index);
          }
        },
      })}
      features={{
        colFc: true,
        opHov: cond,
      }}
      disabled={disabled}
    >
      <svg viewBox="0 0 9 9" key="l_dot">
        <circle cx={4.5} cy={4.5} r={3.5} />
      </svg>
      <div key={"l_el_" + index}>{element}</div>
    </Container>
  ));
};

export default lComponent;
