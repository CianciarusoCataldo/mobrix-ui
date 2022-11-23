import React from "react";

import { MobrixUiReactiveComponent } from "../../../utils/global";
import { SpinnerProps } from "./types";

import DEFAULT_ICONS from "./icons";

const spinnerComponent: MobrixUiReactiveComponent<string, SpinnerProps> = ({
  statuses,
  value,
}) => {
  const ICONS = statuses || DEFAULT_ICONS;

  return value && ICONS[value] ? ICONS[value] : ICONS.loading;
};

export default spinnerComponent;
