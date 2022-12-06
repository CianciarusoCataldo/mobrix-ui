import React from "react";

import { BuilderComponent, MoBrixUiComponent } from "../../../utils/global";
import { DrawerProps } from "./types";

import Button from "../../atoms/Button";
import Container from "../../molecules/Container";
import classNames from "classnames";

const drawerComponent: MoBrixUiComponent<DrawerProps, BuilderComponent[]> = ({
  onClose,
  children,
  dark,
  hide,
  animated,
  /* istanbul ignore next */
  onFocusLost = () => {},
}) => {
  /* istanbul ignore next */
  const onFocusLostCallback = () => {
    if (!hide) {
      onFocusLost();
      onClose!();
    }
  };

  return [
    <Container
      className={classNames("content", {
        "fade-out": hide,
      })}
      animated={animated}
      key="drawer_content"
      dark={dark}
      a11yLabel="drawer-content"
      onFocusLost={onFocusLostCallback}
    >
      {children}
      <Button
        animated={animated}
        key="drawer_buttons_panel"
        dark={dark}
        unstyled
        id="drawer_close_button"
        onClick={() => {
          onClose!();
        }}
        className={classNames("drawer-close-button", {
          "fade-out": hide,
        })}
        a11yLabel="drawer-close-button"
      >
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="37"
            viewBox="0 0 11 18"
          >
            <path d="M8.6812.1963l2.1208928 2.120293-8.484 8.4864L.1972 8.6827z" />
            <path d="M10.8032656 15.0470656l-2.1213 2.1213-8.4852-8.4852 2.1213-2.1213z" />
          </svg>
        }
      </Button>
    </Container>,
  ];
};

export default drawerComponent;
