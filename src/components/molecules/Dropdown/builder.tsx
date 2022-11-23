import React from "react";

import { MobrixUiReactiveComponentBuilder } from "../../../utils/global";
import { DropdownProps } from "./types";

import classnames from "classnames";

import Button from "../../atoms/Button";
import Popup from "../Popup";

const dropdownComponent: MobrixUiReactiveComponentBuilder<
  number,
  DropdownProps
> = ({ content = [], onChange, value, hideArrow, dark, setValue, shadow }) => {
  const [isVisible, setVisible] = React.useState(false);

  const selectedItem = content[value] || {
    name: "",
    icon: <div />,
  };

  return {
    additionalProps: {
      onKeyDown: (e) => {
        if (e.code === "Enter") {
          setVisible(!isVisible);
        }
      },
      onBlur: () => {
        setVisible(false);
      },
    },
    Component: [
      <Button
        unstyled
        onClick={() => {
          setVisible(!isVisible);
        }}
        dark={dark}
        className="button"
        id="options-menu"
        key="options-menu"
        a11y={false}
      >
        <div tabIndex={-1} key="label" className="label">
          <div tabIndex={-1} className="label">
            {selectedItem.icon}
          </div>
          <div tabIndex={-1} className="label">
            {selectedItem.name}
          </div>
        </div>
        <div
          key="icon"
          tabIndex={-1}
          className={classnames("icon", {
            rotate: isVisible,
            "rotate-back": !isVisible,
            "component-hidden": hideArrow,
          })}
        >
          <p tabIndex={-1}>
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
        a11y={false}
      >
        {content.map((item, index) => (
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
        ))}
      </Popup>,
    ],
  };
};

export default dropdownComponent;
