import React from "react";

import { MobrixUiReactiveComponent } from "../../../types/global";
import { SpinnerProps } from "../../../types/components/atoms";

import defaultIcons from "./icons";

const spinnerComponent: MobrixUiReactiveComponent<string, SpinnerProps> = ({
  statuses,
  value,
}) => {
  const icons = statuses || defaultIcons;

  return value && icons[value] ? icons[value] : icons.loading;
};

export default spinnerComponent;
