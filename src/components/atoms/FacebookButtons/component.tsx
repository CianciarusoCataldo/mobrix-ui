import React from "react";

import { MoBrixUiComponent } from "../../../types/global";

import { FacebookButtonsProps } from "../../../types/components/atoms";

const widths = {
  small: { share: 140, noshare: 70 },
  large: { share: 180, noshare: 80 },
};

const heights = {
  small: 20,
  large: 29,
};

const facebookButtonsComponent: MoBrixUiComponent<FacebookButtonsProps> = ({
  width,
  pageId,
  small,
  share,
}) => {
  const size = small ? "small" : "large";
  const buttons = share ? "share" : "noshare";

  return (
    <iframe
      width={`${width || widths[size][buttons]}px`}
      title={pageId + " page"}
      className="facebook-buttons-iframe"
      src={`https://www.facebook.com/plugins/like.php?href=https://www.facebook.com/${pageId}&width=126&layout=button&action=like&size=${size}&share=${
        buttons === "share"
      }&height=46&appId`}
      style={{
        height: `${heights[size]}px`,
      }}
      scrolling="no"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  );
};

export default facebookButtonsComponent;
