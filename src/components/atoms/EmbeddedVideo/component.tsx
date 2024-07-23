import React from "react";

import { BuilderComponent, MbxUiComponent } from "../../../types";
import { EmbeddedVideoProps } from "../../../types";

import { parseUrl } from "./utils";

const embeddedVideoComponent: MbxUiComponent<
  EmbeddedVideoProps,
  BuilderComponent
> = ({ url = "", a11y }) => {
  const { link = "", features = "", eProps = {} } = parseUrl(url);
  const tabIndex = a11y ? 0 : -1;
  return link ? (
    <iframe tabIndex={tabIndex} src={link} allow={features} {...eProps} />
  ) : (
    <div />
  );
};

export default embeddedVideoComponent;
