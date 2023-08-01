import React from "react";

import {
  MoBrixUiComponent,
  CardProps,
  BuilderComponent,
} from "mobrix-ui-types";

import { Divider } from "../../atoms";

const cardComponent: MoBrixUiComponent<CardProps, BuilderComponent[]> = ({
  header,
  icon,
  body,
  children,
  footer,
  dark,
  noDividers,
  noFooterDivider,
  noHeaderDivider,
}) => {
  let components: JSX.Element[] = [];

  header &&
    components.push(
      <div key="mobrix_ui_card_header">
        <div className="header">{header}</div>
        <Divider
          dark={dark}
          hide={(!body && !footer) || noDividers || noHeaderDivider}
        />
      </div>
    );

  body &&
    components.push(
      <div className="body" key="mobrix_ui_card_body">
        {body}
      </div>
    );

  children &&
    components.push(<div key="mobrix_ui_card_children">{children}</div>);

  footer &&
    components.push(
      <div key="mobrix_ui_card_footer">
        <Divider
          hide={(!body && !header) || noDividers || noFooterDivider}
          dark={dark}
        />
        <div className="footer">{footer}</div>
      </div>
    );

  return components;
};

export default cardComponent;
