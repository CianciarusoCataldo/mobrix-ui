import React from "react";

import { MbxUiReactiveComponent, SelectorProps } from "../../../types";

const selectorComponent: MbxUiReactiveComponent<
  number | undefined,
  SelectorProps
> = ({ elements = [], optionClassName }) => {
  const optionProps = optionClassName ? { className: optionClassName } : {};

  return elements.map((el, index) => (
    <option key={"sel_opt_" + index} value={index} {...optionProps}>
      {el}
    </option>
  ));
};

export default selectorComponent;
