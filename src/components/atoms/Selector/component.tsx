import React from "react";

import { MobrixUiReactiveComponent } from "../../../utils/global";
import { SelectorProps } from "./types";

const selectorComponent: MobrixUiReactiveComponent<
  number | undefined,
  SelectorProps
> = ({ elements = [], animated, value, setValue }) =>
  elements.map((el, index) => (
    <option key={"selector_option_" + index} value={index}>
      {el}
    </option>
  ));

export default selectorComponent;
