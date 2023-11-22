import React from "react";

import {
  MoBrixUiComponent,
  CardProps,
  BuilderComponent,
} from "../../../types";

import { generateElementsArray } from "../../../tools/utils";
import { Divider } from "../../atoms";

const cardComponent: MoBrixUiComponent<CardProps, BuilderComponent[]> = ({
  header,
  body,
  children,
  footer,
  dark,
  noDividers,
  noFooterDivider,
  noHeaderDivider,
}) => generateElementsArray([{
  condition: !!header,
  component: <div key="mobrix_ui_card_header" data-mobrix-ui-class="header">
    {header}
    <Divider
      dark={dark}
      hide={(!body && !footer) || noDividers || noHeaderDivider}
    /></div>
},
{
  condition: !!body,
  component: <div data-mobrix-ui-class="body" key="mobrix_ui_card_body">
    {body}
  </div>
},
{
  condition: !!children,
  component: children
},
{
  condition: !!footer,
  component: <div key="mobrix_ui_card_footer">
    <Divider
      hide={(!body && !header) || noDividers || noFooterDivider}
      dark={dark}
    />
    <div data-mobrix-ui-class="footer">{footer}</div>
  </div>
}]);

export default cardComponent;
