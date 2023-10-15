import React from "react";

import {
  DropdownProps,
  MobrixUiReactiveComponentBuilder,
} from "../../../types";

import classnames from "classnames";

import { Button } from "../../atoms";
import Popup from "../Popup";

const DropdownInternalComponent: MobrixUiReactiveComponentBuilder<
  number,
  DropdownProps
> = ({
  elements = [],
  onChange = () => {},
  value,
  hideArrow,
  dark,
  setValue,
  shadow,
  /* istanbul ignore next */
  onFocusLost = () => {},
  ...commonProps
}) => {
  const [isVisible, setVisible] = React.useState(false);
  const [selected, selectItem] = React.useState<number>(-2);
  const selectedItem = elements[value] || <div />;

  const keyDownCallback = (visibility: boolean) => {
    isVisible !== visibility && setVisible(visibility);
    selectItem(-1);
  };

  /* istanbul ignore next */
  const onFocusLostCallback = () => {
    onFocusLost();
    keyDownCallback(false);
  };

  return {
    commonProps: {
      ...commonProps,
      dark,
      shadow,
      onFocusLost: onFocusLostCallback,
      onKeyDown: (e) => {
        let actualSelected = selected;
        switch (e.code) {
          /* istanbul ignore next */
          case "Tab": {
            if (
              (e.shiftKey && actualSelected === 0) ||
              actualSelected === elements.length - 1
            ) {
              keyDownCallback(false);
            }
            break;
          }
          case "Enter": {
            if (selected > -1) {
              onChange(selected);
              setValue(selected);
              keyDownCallback(false);
              return;
            } else {
              setVisible(!isVisible);
            }
            e.preventDefault();
            break;
          }

          case "Escape": {
            keyDownCallback(false);
            return;
          }

          case "ArrowUp": {
            if (actualSelected === 0) {
              keyDownCallback(false);
              return;
            }
            actualSelected -= 1;
            break;
          }

          case "ArrowDown": {
            if (actualSelected === elements.length - 1) {
              keyDownCallback(false);
              return;
            }
            if (!isVisible) {
              setVisible(true);
            }
            actualSelected += 1;
            break;
          }
        }

        actualSelected !== selected && selectItem(actualSelected);
      },
    },
    Component: [
      <Button
        unstyled
        onClick={() => {
          keyDownCallback(!isVisible);
        }}
        dark={dark}
        className="button"
        id="options_menu"
        key="options-menu"
        a11y={false}
      >
        <div
          tabIndex={-1}
          key="dropdown_selected_element_label"
          className="dropdown-selected-element"
        >
          {selectedItem}
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
        a11y={false}
        className="options"
      >
        {elements.map((item, index) => (
          <Button
            unstyled
            onFocus={() => {
              selectItem(index);
            }}
            id={`dropdown_option_${index}`}
            onClick={() => {
              onChange(index);
              setValue(index);
              keyDownCallback(false);
            }}
            key={`item_${index}`}
            className={classnames("regular", {
              first: index === 0,
              last: index === elements.length - 1,
              selected: selected === index,
            })}
          >
            <div className="dropdown-element">{item}</div>
          </Button>
        ))}
      </Popup>,
    ],
  };
};

export default DropdownInternalComponent;
