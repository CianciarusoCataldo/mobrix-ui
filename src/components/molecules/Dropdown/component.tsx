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
        background={commonProps.background}
        disabled={disabled}
        onClick={() => {
          keyDown(!isVisible);
        }}
        dark={dark}
        scl="drop-bt;nout;wfu"
        key="opts-m"
        a11y={false}
      >
        <div
          tabIndex={-1}
          key="drop_s_e_b"
          data-mbx-scl="flxr;drop-sel-el;mauto;nout"
        >
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
          scl={`ic;nout;rot-${isVisible}`}
        >
          <p tabIndex={-1}>
            <i
              data-mbx-scl="arr-ic;nout"
              {...(disabled && {
                "data-mbx-atts": "disabled",
              })}
            ></i>
          </p>
        </Container>
      </Button>,
      <Popup
        background={commonProps.background}
        key="opts"
        shadow={shadow}
        disabled={disabled}
        dark={dark}
        hide={!isVisible}
        a11y={false}
        scl="flxc;opts;wfu;act"
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
              keyDown(false);
            }}
            fts="noShFc;colFc;"
            key={`item_${index}`}
            scl={`flxc;reg;wfu`}
            additionalProps={{
              "data-mbx-first": index === 0,
              "data-mbx-last": index === elements.length - 1,
            }}
          >
            <Container
              disabled={disabled || selected === index}
              a11y={false}
              background={false}
              shadow={false}
              animated={false}
              dark={dark}
              scl="flxr;drop-el;mauto"
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
