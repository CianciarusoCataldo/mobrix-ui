import React from "react";

import { MobrixUiReactiveComponent, SelectorProps } from "../../../types";

const selectorComponent: MobrixUiReactiveComponent<
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
