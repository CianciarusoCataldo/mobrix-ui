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
  noBottomDivider,
  noTopDivider,
}) => generateElementsArray([{
  condition: !!header,
  component: <div key="mobrix_ui_card_header" data-mobrix-ui-class="header">
    {header}
  </div>
},
{
  condition: (!!body && !!header) && !noDividers && !noTopDivider,
  component: <Divider
    dark={dark}
    additionalProps={{
      "data-mobrix-ui-class": "top-divider"
    }}
  />
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
  condition: ((!!body && !!footer) || (!body && !!header && !!footer)) && !noDividers && !noBottomDivider,
  component: <Divider
    dark={dark}
    additionalProps={{
      "data-mobrix-ui-class": "bottom-divider"
    }}
  />
},
{
  condition: !!footer,
  component:
    <div data-mobrix-ui-class="footer">{footer}</div>
}]);

export default cardComponent;
