import React from "react";
import { GithubWidgetProps } from "../../../types/components/atoms/github-widget";
import { BuilderComponent, MoBrixUiComponent } from "../../../types";

const Component: MoBrixUiComponent<
  GithubWidgetProps,
  BuilderComponent
> = () => {
  const [pullN, setPullN] = React.useState(0);
  fetch("https://api.github.com/repos/CianciarusoCataldo/mobrix-ui/pulls")
    .then((response) => response.json())
    .then((response) => {
      setPullN(response.length);
    });

  return <div>{pullN}</div>;
};

export default Component;
