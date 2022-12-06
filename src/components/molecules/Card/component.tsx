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
  onClose,
  setValue,
  children,
  footer,
  dark,
}) => {
  let components: JSX.Element[] = [];

  (header || onClose) &&
    components.push(
      <div key="mobrix_ui_card_header">
        <div className="header-container">
          {onClose && (
            <Button
              unstyled
              dark={dark}
              id="card_dismiss_button"
              className="card-dismiss-button"
              onClick={() => {
                onClose();
                dismissable && setValue(true);
              }}
            >
              {xIcon}
            </Button>
          )}
          {header && <div className="header">{header}</div>}
          {icon}
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
