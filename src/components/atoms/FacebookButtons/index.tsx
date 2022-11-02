import "./styles.css";

import React from "react";

import { FacebookButtonsComponent } from "./types";

import { buildComponent } from "../../../utils";

const widths = {
  small: { share: 140, noshare: 70 },
  large: { share: 180, noshare: 80 },
};

const heights = {
  small: 20,
  large: 29,
};

const FacebookButtons: FacebookButtonsComponent = ({
  pageId,
  share,
  small,
  width,
  shadow,
  className,
  ...commonProps
}) => {
  const size = small ? "small" : "large";
  const buttons = share ? "share" : "noshare";

  return buildComponent({
    commonProps,
    name: "mobrix-ui-facebook-buttons",
    Component: (
      <iframe
        width={`${width || widths[size][buttons]}px`}
        title="page"
        src={`https://www.facebook.com/plugins/like.php?href=https://www.facebook.com/${pageId}&width=126&layout=button&action=like&size=${size}&share=${
          buttons === "share"
        }&height=46&appId`}
        style={{
          border: "none",
          overflow: "hidden",
          height: `${heights[size]}px`,
        }}
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    ),
  });
};

export default FacebookButtons;
