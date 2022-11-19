import "./styles.css";

import { FacebookButtonsComponent } from "./types";

import { buildComponent } from "../../../utils";

import facebookButtonsComponent from "./component";

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
    Component: facebookButtonsComponent({
      pageId,
      share,
      small,
      width,
    }),
  });
};

export default FacebookButtons;
