import React from "react";

import {
  DropdownProps,
  MobrixUiReactiveComponentBuilder,
} from "../../../types";

import { Button } from "../../atoms";
import Popup from "../Popup";
import Container from "../Container";

const DropdownInternalComponent: MobrixUiReactiveComponentBuilder<
  number,
  DropdownProps
> = ({
  elements = [],
  onChange = () => {},
  value,
  hideArrow,
  dark,
  disabled,
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
        disabled={disabled}
        unstyled
        onClick={() => {
          keyDownCallback(!isVisible);
        }}
        dark={dark}
        additionalProps={{
          "data-mbx-class": "button",
          "data-mbx-test": "options_menu",
        }}
        key="options-menu"
        a11y={false}
      >
        <div
          tabIndex={-1}
          key="dropdown_selected_element_label"
          data-mbx-class="dropdown-selected-element"
        >
          {selectedItem}
        </div>
        <Container
          hide={hideArrow}
          dark={dark}
          unstyled
          key="icon"
          disabled={disabled}
          a11y={false}
          additionalProps={{
            "data-mbx-class": "icon",
            "data-mbx-rotate": isVisible,
          }}
        >
          <p tabIndex={-1}>
            <i
              data-mbx-class="arrow-icon"
              data-mbx-enabled={!disabled}
            ></i>
          </p>
        </Container>
      </Button>,
      <Popup
        key="options"
        shadow={shadow}
        disabled={disabled}
        dark={dark}
        hide={!isVisible}
        a11y={false}
        additionalProps={{
          "data-mbx-class": "options",
        }}
      >
        {elements.map((item, index) => (
          <Button
            unstyled
            disabled={disabled}
            onFocus={() => {
              selectItem(index);
            }}
            onClick={() => {
              onChange(index);
              setValue(index);
              keyDownCallback(false);
            }}
            key={`item_${index}`}
            additionalProps={{
              "data-mbx-class": "regular",
              "data-mbx-first": index === 0,
              "data-mbx-last": index === elements.length - 1,
              "data-mbx-selected": selected === index,
              "data-mbx-test": `dropdown_option_${index}`,
            }}
          >
            <Container
              unstyled
              dark={dark}
              additionalProps={{
                "data-mbx-class": "dropdown-element",
              }}
            >
              {item}
            </Container>
          </Button>
        ))}
      </Popup>,
    ],
  };
};

export default DropdownInternalComponent;
