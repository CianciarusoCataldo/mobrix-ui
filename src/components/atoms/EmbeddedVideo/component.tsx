import React from "react";

import { BuilderComponent, MoBrixUiComponent } from "../../../types";
import { EmbeddedVideoProps } from "../../../types";

import { parseEmbedUrl } from "./utils";

const embeddedVideoComponent: MoBrixUiComponent<
  EmbeddedVideoProps,
  BuilderComponent
> = ({ url = "" }) => {
  const { embeddedLink, allowedFeatures, extraProps } = parseEmbedUrl(url);

  return embeddedLink ? (
    <iframe src={embeddedLink} allow={allowedFeatures} {...extraProps} />
  ) : (
    <div />
  );
};

export default embeddedVideoComponent;
