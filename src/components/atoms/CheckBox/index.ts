import "./styles.css";

import { CheckBoxComponent } from "../../../types";

import { buildMobrixUiReactiveComponent } from "../../../tools";

import { DefaultCheckIcon } from "./icons";

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
const Checkbox: CheckBoxComponent = ({
  value: inputValue,
  onChange = () => {},
  icon,
  onKeyDown = () => {},
  additionalProps = {},
  ...commonProps
}) =>
  buildMobrixUiReactiveComponent<boolean>({
    name: "checkbox",
    Component: ({ value, setValue }) => (value ? icon || DefaultCheckIcon : ""),
    props: (actualValue, setValue) => ({
      commonProps: {
        ...commonProps,
        ...(!commonProps.disabled && {
          onKeyDown: (e) => {
            onKeyDown(e);
            if (e.code === "Enter" || e.code === "Space") {
              onChange(!actualValue);
              setValue(!actualValue);
            }
          },
        }),
      },
      additionalProps: {
        ...additionalProps,
        ...(!commonProps.disabled && {
          onClick: () => {
            onChange(!actualValue);
            setValue(!actualValue);
          },
        }),
      },
    }),
    inputValue,
    defaultValue: false,
  });

export default Checkbox;
