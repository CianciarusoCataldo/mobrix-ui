import React from "react";

import { MoBrixUiComponent, CardProps, BuilderComponent } from "../../../types";

import { generateElementsArray } from "../../../tools/utils";
import { Divider } from "../../atoms";

const cardComponent: MoBrixUiComponent<CardProps, BuilderComponent[]> = ({
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
          key="card_header"
          data-mbx-class="header"
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
          key="card_top_divider"
          dark={dark}
          additionalProps={{
            "data-mbx-class": "top-divider",
          }}
        />
      ),
    },
    {
      condition: !!body,
      component: (
        <div
          className={bodyClassName}
          data-mbx-class="body"
          key="card_body"
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
          key="card_bottom_divider"
          dark={dark}
          additionalProps={{
            "data-mbx-class": "bottom-divider",
          }}
        />
      ),
    },
    {
      condition: !!footer,
      component: (
        <div
          className={footerClassName}
          key="card_footer"
          data-mbx-class="footer"
          {...footerProps}
        >
          {footer}
        </div>
      ),
    },
  ]);

export default cardComponent;
