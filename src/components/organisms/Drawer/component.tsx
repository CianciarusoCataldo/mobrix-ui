import React from "react";

import {
  BuilderComponent,
  DrawerProps,
  MoBrixUiComponent,
} from "../../../types";

import Button from "../../atoms/Button";
import Container from "../../molecules/Container";

const DrawerInternalComponent: MoBrixUiComponent<
  DrawerProps,
  BuilderComponent[]
> = ({
  onClose,
  children,
  dark,
  hide,
  animated,
  disabled,
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
      disabled={disabled}
      animated={animated}
      key="drawer_content"
      dark={dark}
      a11yLabel="drawer-content"
      onFocusLost={onFocusLostCallback}
      additionalProps={{
        "data-mbx-class": "content",
      }}
    >
      {children}
      <Button
        disabled={disabled}
        animated={animated}
        key="drawer_buttons_panel"
        dark={dark}
        unstyled
        onClick={() => {
          onClose!();
        }}
        additionalProps={{
          "data-mbx-class": "drawer-close-button",
          "data-mbx-test": "drawer_close_button",
        }}
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

export default DrawerInternalComponent;
