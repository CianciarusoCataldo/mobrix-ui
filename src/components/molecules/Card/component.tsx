import React from "react";

import { MbxUiComponent, CardProps, BuilderComponent } from "../../../types";

import { generateElementsArray } from "../../../tools/utils";
import { Divider } from "../../atoms";

const cardComponent: MbxUiComponent<CardProps, BuilderComponent[]> = ({
  header,
  body,
  children,
  footer,
  dark,
  noDividers,
  noBottomDivider,
  noTopDivider,
  headerClassName,
  bodyClassName,
  footerClassName,
  headerProps = {},
  bodyProps = {},
  footerProps = {},
}) =>
  generateElementsArray([
    {
      condition: !!header,
      component: (
        <div
          className={headerClassName}
          key="card_h"
          data-mbx-scl="head;"
          {...headerProps}
        >
          {header}
        </div>
      ),
    },
    {
      condition: !!body && !!header && !noDividers && !noTopDivider,
      component: (
        <Divider
          key="card_t_d"
          dark={dark}
          debug={{
            scl: "top-divider",
          }}
        />
      ),
    },
    {
      condition: !!body,
      component: (
        <div
          className={bodyClassName}
          data-mbx-scl="body"
          key="card_bd"
          {...bodyProps}
        >
          {body}
        </div>
      ),
    },
    {
      condition: !!children,
      component: children,
    },
    {
      condition:
        ((!!body && !!footer) || (!body && !!header && !!footer)) &&
        !noDividers &&
        !noBottomDivider,
      component: (
        <Divider
          key="card_b_d"
          dark={dark}
          debug={{
            scl: "bottom-divider",
          }}
        />
      ),
    },
    {
      condition: !!footer,
      component: (
        <div
          className={footerClassName}
          key="card_f"
          data-mbx-scl="footer"
          {...footerProps}
        >
          {footer}
        </div>
      ),
    },
  ]);

export default cardComponent;
