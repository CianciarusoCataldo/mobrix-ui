import "./styles.css";

import { RadioButtonComponent } from "../../../types";

import {
  buildMobrixUiReactiveComponent,
  parseCommonProps,
} from "../../../tools";

import component from "./component";

/**
 * MBX_DESCRIPTION
 *
 * MBX_PROPS
 *
 * @example MBX_EXAMPLE
 *
 * @since MBX_SINCE
 *
 * @author MBX_AUTHOR
 *
 * @copyright MBX_COPYRIGHT
 */
const RadioButton: RadioButtonComponent = ({
  value: inputValue,
  onChange = () => {},
  deselectable = true,
  onKeyDown = () => {},
  additionalProps = {},
  ...commonProps
}) => {
  const parsedProps = parseCommonProps(commonProps);

  return buildMobrixUiReactiveComponent<boolean>({
    name: "radio-button",
    Component: ({ value, setValue }) => (value ? component : ""),
    defaultValue: false,
    inputValue,
    props: (value, setValue) => {
      const callBack = () => {
        if (!value || deselectable) {
          onChange(!value);
          setValue(!value);
        }
      };

      return {
        commonProps: {
          ...parsedProps,
          ...(!parsedProps.disabled && {
            onKeyDown: (e) => {
              if (e.code === "Enter") {
                callBack();
              }
              onKeyDown(e);
            },
          }),
        },
        additionalProps: {
          ...additionalProps,
          ...(!parsedProps.disabled && {
            onClick: callBack,
            "data-mbx-opacityhover": parsedProps.hover,
          }),
        },
      };
    },
  });
};

export default RadioButton;
