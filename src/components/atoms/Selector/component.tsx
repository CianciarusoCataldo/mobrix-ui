import React from "react";

import { MobrixUiReactiveComponent } from "../../../types/global";
import { SelectorProps } from "../../../types/components/atoms";

const selectorComponent: MobrixUiReactiveComponent<
  number | undefined,
  SelectorProps
> = ({ elements = [] }) =>
  elements.map((el, index) => (
    <option key={"selector_option_" + index} value={index}>
      {el}
    </option>
  ));

export default selectorComponent;
