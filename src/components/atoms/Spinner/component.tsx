import React from "react";

import { MobrixUiReactiveComponent } from "../../../utils/global";
import { SpinnerProps } from "./types";

import defaultIcons from "./icons";

const spinnerComponent: MobrixUiReactiveComponent<string, SpinnerProps> = ({
  statuses,
  value,
}) => {
  const icons = statuses || defaultIcons;

  return value && icons[value] ? icons[value] : icons.loading;
};

export default spinnerComponent;
