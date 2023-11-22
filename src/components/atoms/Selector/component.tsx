import React from "react";

import { MobrixUiReactiveComponent, SelectorProps } from "../../../types";

const selectorComponent: MobrixUiReactiveComponent<
  number | undefined,
  SelectorProps
> = ({ elements = [] }) =>
  elements.map((el, index) => (
    <option data-mobrix-ui-class="selector-option" key={"selector_option_" + index} value={index}>
      {el}
    </option>
  ));

export default selectorComponent;
