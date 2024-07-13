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
        additionalProps: { onClick: () => onClick(index) },
        style: { cursor: "pointer" },
        onKeyDown: (e) => {
          if (e.code === "Enter") {
            onClick(index);
          }
        },
      })}
      features={{ colFc: true, opHov: onClick !== undefined, noShFc: true }}
      scl="flxr;nout"
      disabled={disabled}
      mbxClass="lis-el"
    >
      <svg
        viewBox="0 0 9 9"
        key="lst_dot"
        data-mbx-cls="dot"
        data-mbx-scl="myauto"
      >
        <circle cx={4.5} cy={4.5} r={3.5} />
      </svg>
      <div key={"lst_el_" + index}>{element}</div>
    </Container>
  ));
};

export default listComponent;
