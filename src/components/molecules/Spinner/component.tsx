import React from "react";

import { MobrixUiReactiveComponent } from "../../../utils/global";
import { SpinnerProps } from "./types";

import Container from "../Container";
import DEFAULT_ICONS from "./icons";

const spinnerComponent: MobrixUiReactiveComponent<string, SpinnerProps> = ({
  statuses,
  value,
}) => {
  const ICONS = statuses || DEFAULT_ICONS;
  const StatusIcon = () => (
    <Container unstyled animated>
      {value && ICONS[value] ? ICONS[value] : ICONS.loading}
    </Container>
  );

  return (
    <Container unstyled animated>
      <StatusIcon />
    </Container>
  );
};

export default spinnerComponent;
