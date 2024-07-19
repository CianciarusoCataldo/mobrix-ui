import React from "react";

import { BuilderComponent, MbxUiComponent } from "../../../types";
import { EmbeddedVideoProps } from "../../../types";

import { parseEmbedUrl } from "./utils";

const embeddedVideoComponent: MbxUiComponent<
  EmbeddedVideoProps,
  BuilderComponent
> = ({ url = "" }) => {
  const { link = "", features = "", extraProps = {} } = parseEmbedUrl(url);

  return link ? (
    <iframe src={link} allow={features} {...extraProps} />
  ) : (
    <div />
  );
};

export default embeddedVideoComponent;
