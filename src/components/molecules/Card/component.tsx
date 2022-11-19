import React from "react";

import { MobrixUiReactiveComponent } from "../../../utils/global";
import { CardProps } from "./types";

import { xIcon } from "./icons";
import Button from "../../atoms/Button";
import Divider from "../../atoms/Divider";

const cardComponent: MobrixUiReactiveComponent<boolean, CardProps> = ({
  header,
  dismissable,
  icon,
  body,
  onClick,
  setValue,
  children,
  footer,
  dark,
}) => {
  let components: JSX.Element[] = [];

  header &&
    components.push(
      <div key="mobrix_ui_card_header">
        <div className="header-container">
          {icon}
          <div className="header">{header}</div>
          <Button
            unstyled
            hide={!dismissable}
            dark={dark}
            className="card-dismiss-button"
            onClick={() => {
              onClick && onClick();
              setValue(true);
            }}
          >
            {xIcon}
          </Button>
        </div>
        <Divider dark={dark} />
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
        <Divider dark={dark} />
        <div className="footer">{footer}</div>
      </div>
    );

  return components;
};

export default cardComponent;
