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
  component: <div key="mobrix_ui_card_header" data-mbx-class="header">
    {header}
  </div>
},
{
  condition: (!!body && !!header) && !noDividers && !noTopDivider,
  component: <Divider
    dark={dark}
    additionalProps={{
      "data-mbx-class": "top-divider"
    }}
  />
},
{
  condition: !!body,
  component: <div data-mbx-class="body" key="mobrix_ui_card_body">
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
      "data-mbx-class": "bottom-divider"
    }}
  />
},
{
  condition: !!footer,
  component:
    <div data-mbx-class="footer">{footer}</div>
}]);

export default cardComponent;
