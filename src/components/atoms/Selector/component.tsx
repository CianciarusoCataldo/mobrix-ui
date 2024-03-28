import React from "react";

import { MbxUiReactiveComponent, SelectorProps } from "../../../types";

const selectorComponent: MbxUiReactiveComponent<
  number | undefined,
  SelectorProps
> = ({ elements = [], optionClassName }) => {
  const optionProps = optionClassName ? { className: optionClassName } : {};

  return elements.map((el, index) => (
    <option
      data-mbx-class="selector-option"
      key={"selector_option_" + index}
      value={index}
      {...optionProps}
    >
      {el}
    </option>
  ));
};

export default selectorComponent;
