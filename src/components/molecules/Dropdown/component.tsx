import React from "react";

import { DropdownProps, MbxUiReactiveComponentBuilder } from "../../../types";

import { Button } from "../../atoms";
import Popup from "../Popup";
import Container from "../Container";

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
        animated={false}
        shadow={false}
        background={commonProps.background}
        disabled={disabled}
        onClick={() => {
          keyDownCallback(!isVisible);
        }}
        dark={dark}
        debug={{
          scl: "drop-bt",
        }}
        key="options-menu"
        a11y={false}
      >
        <div tabIndex={-1} key="drop_sel_el_lb" data-mbx-scl="flxr;drop-sel-el">
          {selectedItem}
        </div>
        <Container
          background={false}
          animated={false}
          shadow={false}
          hide={hideArrow}
          dark={dark}
          key="icon"
          disabled={disabled}
          a11y={false}
          debug={{
            scl: `ic;rot-${isVisible}`,
          }}
        >
          <p tabIndex={-1}>
            <i
              data-mbx-scl="arr-ic"
              {...(disabled && {
                "data-mbx-atts": "disabled",
              })}
            ></i>
          </p>
        </Container>
      </Button>,
      <Popup
        background={commonProps.background}
        key="options"
        shadow={shadow}
        disabled={disabled}
        dark={dark}
        hide={!isVisible}
        a11y={false}
        debug={{
          scl: "flxc;opts",
        }}
      >
        {elements.map((item, index) => (
          <Button
            animated={false}
            shadow={false}
            background={false}
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
            debug={{
              scl: `flxc;reg;${selected === index ? "selected" : ""}`,
            }}
            additionalProps={{
              "data-mbx-first": index === 0,
              "data-mbx-last": index === elements.length - 1,
              "data-mbx-features": "noShFc;colFc;",
            }}
          >
            <Container
              a11y={false}
              background={false}
              shadow={false}
              dark={dark}
              debug={{ scl: "flxr;drop-el;" }}
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
