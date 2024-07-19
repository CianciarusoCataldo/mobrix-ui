import React from "react";

import { DropdownProps, MbxUiReactiveComponentBuilder } from "../../../types";

import { Button, IconButton } from "../../atoms";
import Popup from "../Popup";
import Container from "../Container";
import { ArrowIcon } from "../../../icons";

const DropdownInternalComponent: MbxUiReactiveComponentBuilder<
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
  hover,
  background,
  /* istanbul ignore next */
  onFocusLost = () => {},
  ...commonProps
}) => {
  const [isVisible, setVisible] = React.useState(false);
  const [selected, selectItem] = React.useState<number>(-2);
  const selectedItem = elements[value] || <div />;

  const keyDown = (visibility: boolean) => {
    isVisible !== visibility && setVisible(visibility);
    selectItem(-1);
  };

  /* istanbul ignore next */
  const focusLost = () => {
    onFocusLost();
    keyDown(false);
  };

  return {
    commonProps: {
      ...commonProps,
      dark,
      shadow,
      onFocusLost: focusLost,
      onKeyDown: (e) => {
        let actualSelected = selected;
        switch (e.code) {
          /* istanbul ignore next */
          case "Tab": {
            if (
              (e.shiftKey && actualSelected === 0) ||
              actualSelected === elements.length - 1
            ) {
              keyDown(false);
            }
            break;
          }
          case "Enter": {
            if (selected > -1) {
              onChange(selected);
              setValue(selected);
              keyDown(false);
              return;
            } else {
              setVisible(!isVisible);
            }
            e.preventDefault();
            break;
          }

          case "Escape": {
            keyDown(false);
            return;
          }

          case "ArrowUp": {
            if (actualSelected === 0) {
              keyDown(false);
              return;
            }
            actualSelected -= 1;
            break;
          }

          case "ArrowDown": {
            if (actualSelected === elements.length - 1) {
              keyDown(false);
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
        animated={false}
        shadow={false}
        hover={hover}
        background={background}
        disabled={disabled}
        onClick={() => {
          keyDown(!isVisible);
        }}
        dark={dark}
        key="opts-m"
        a11y={false}
        style={
          {
            "--mbx-dd-rot": isVisible ? "90deg" : "270deg",
          } as React.CSSProperties
        }
      >
        <div tabIndex={-1} key="drop_s_e_b">
          {selectedItem}
        </div>
        <ArrowIcon width="15" height="12" disabled={disabled} hover={hover} />
      </Button>,
      <Popup
        background={background}
        key="opts"
        shadow={shadow}
        disabled={disabled}
        dark={dark}
        hide={!isVisible}
        a11y={false}
      >
        {elements.map((item, index) => (
          <Button
            animated={false}
            shadow={false}
            disabled={disabled}
            onFocus={() => {
              selectItem(index);
            }}
            onClick={() => {
              onChange(index);
              setValue(index);
              keyDown(false);
            }}
            dark={dark}
            features={{ noShFc: true, colFc: true }}
            key={`item_${index}`}
          >
            {item}
          </Button>
        ))}
      </Popup>,
    ],
  };
};

export default DropdownInternalComponent;
