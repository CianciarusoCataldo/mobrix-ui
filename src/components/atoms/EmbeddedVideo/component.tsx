import React from "react";

import { BuilderComponent, MbxUiComponent } from "../../../types";
import { EmbeddedVideoProps } from "../../../types";

import { parseEmbedUrl } from "./utils";

const embeddedVideoComponent: MbxUiComponent<
  EmbeddedVideoProps,
  BuilderComponent
> = ({ url = "" }) => {
  const {
    embeddedLink = "",
    allowedFeatures = "",
    extraProps = {},
  } = parseEmbedUrl(url);

  return embeddedLink ? (
    <iframe
      src={embeddedLink}
      allow={allowedFeatures}
      data-mbx-scl="wfu"
      {...extraProps}
    />
  ) : (
    <div />
  );
};

export default embeddedVideoComponent;
