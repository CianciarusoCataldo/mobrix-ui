import React from "react";

import { MobrixUiReactiveComponent } from "../../../utils/global";
import { DropdownProps } from "./types";

import classnames from "classnames";

import Button from "../../atoms/Button";
import Popup from "../Popup";

const dropdownComponent: MobrixUiReactiveComponent<number, DropdownProps> = ({
  content = [],
  onChange,
  value,
  hideArrow,
  dark,
  setValue,
  shadow,
}) => {
  const [isVisible, setVisible] = React.useState(false);

  const selectedItem = content[value] || {
    name: "",
    icon: <div />,
  };

  return [
    <Button
      unstyled
      onClick={() => {
        setVisible(!isVisible);
      }}
      dark={dark}
      className="button"
      id="options-menu"
      key="options-menu"
    >
      <div key="label" className="label">
        <div className="label">{selectedItem.icon}</div>
        <div className="label">{selectedItem.name}</div>
      </div>
      <div
        key="icon"
        className={classnames("icon", {
          rotate: isVisible,
          "rotate-back": !isVisible,
          "component-hidden": hideArrow,
        })}
      >
        <p>
          <i className="arrow-icon"></i>
        </p>
      </div>
    </Button>,
    <Popup
      key="options"
      shadow={shadow}
      dark={dark}
      hide={!isVisible}
      className="options"
    >
      {content.map((item, index) => (
        <div key={`dropdown_option_${index}`} className="option">
          <Button
            unstyled
            id={`dropdown_option_${index}`}
            onClick={() => {
              onChange && onChange(index);
              setValue(index);
              setVisible(false);
            }}
            key={`item_${index}`}
            className={classnames("regular", {
              first: index === 0,
              last: index === content.length - 1,
            })}
          >
            <div className="content">
              {item.icon}
              <div className="label">{item.name}</div>
            </div>
          </Button>
        </div>
      ))}
    </Popup>,
  ];
};

export default dropdownComponent;
