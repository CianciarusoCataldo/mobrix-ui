import React from "react";

import { BuilderComponent, ListProps, MbxUiComponent } from "../../../types";
import Container from "../Container";

const listComponent: MbxUiComponent<ListProps, BuilderComponent[]> = ({
  elements = [],
  onClick,
  hover,
  disabled,
  dark,
}) => {
  return elements.map((element, index) => (
    <Container
      background={false}
      shadow={false}
      dark={dark}
      hover={hover}
      key={`el_${index}`}
      {...(onClick !== undefined && {
        props: { onClick: () => onClick(index) },
        style: { cursor: "pointer" },
        onKeyDown: (e) => {
          if (e.code === "Enter") {
            onClick(index);
          }
        },
        "data-mbx-cls": "clk",
      })}
      features={{ colFc: true, opHov: onClick !== undefined, noShFc: true }}
      disabled={disabled}
    >
      <svg viewBox="0 0 9 9" key="lst_dot">
        <circle cx={4.5} cy={4.5} r={3.5} />
      </svg>
      <div key={"lst_el_" + index}>{element}</div>
    </Container>
  ));
};

export default listComponent;
