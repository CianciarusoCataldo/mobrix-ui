import "./styles.css";
import React from "react";
import classNames from "classnames";

import { DrawerComponent } from "./types";

import { buildComponent } from "../../../utils";

import Button from "../../atoms/Button";

const ALLOWED_POSITIONS = [
  "right",
  "left",
  "top",
  "bottom",
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
];

/**
 * A modern drawer, easy to integrate and to customize.
 *
 * @since 1.0.0
 *
 * @param {DrawerProps["position"]} position drawer position (relative to the entire window). Possible values are `bottom`, `top`, `right`, `left`, `bottom-left`, `bottom-right`, `top-left` and `top-right`
 * @param {DrawerProps["onClose"]} onClose Callback triggered on Drawer close
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example Drawer usage</caption>
 *import { render } from "react-dom";
 *import { Drawer } from 'mobrix-ui';
 *
 * render(<Drawer children={<div>Drawer content</div>} position="top-left" />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Drawer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Drawer: DrawerComponent = ({
  children,
  onClose,
  hide,
  className,
  position,
  ...commonProps
}) => {
  const drawerLocation =
    position && ALLOWED_POSITIONS.includes(position) ? position : "left";
  return buildComponent({
    name: "mobrix-ui-drawer",
    commonProps: {
      ...commonProps,
      className: classNames(
        drawerLocation,
        {
          "ease-in": !hide,
          "ease-out": hide,
        },
        className
      ),
    },
    Component: (
      <div className="container-internal">
        <div className="buttons-panel">
          <Button
            dark={commonProps.dark}
            unstyled
            id="drawer_close_button"
            onClick={() => {
              onClose && onClose();
            }}
            className="close-button"
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
        </div>
        <div className="elements">{children}</div>
      </div>
    ),
  });
};

export default Drawer;
