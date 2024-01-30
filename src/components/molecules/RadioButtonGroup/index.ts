import "./styles.css";

import { RadioButtonGroupComponent } from "../../../types";

import { buildMobrixUiReactiveComponent } from "../../../tools";

import radioButtonGroupComponent from "./component";

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
const RadioButtonGroup: RadioButtonGroupComponent = ({
  value: inputValue,
  buttons,
  elementClassName,
  onChange,
  horizontal,
  additionalProps = {},
  radioProps,
  defaultPosition,
  ...commonProps
}) =>
  buildMobrixUiReactiveComponent<number>({
    name: "radio-button-group",
    defaultValue: -1,
    inputValue,
    commonProps,
    additionalProps: {
      ...additionalProps,
      "data-mbx-orientation": horizontal,
    },
    Component: ({ value, setValue }) =>
      radioButtonGroupComponent({
        value,
        onChange,
        setValue,
        buttons,
        elementClassName,
        horizontal,
        radioProps,
        defaultPosition,
        ...commonProps,
      }),
  });

export default RadioButtonGroup;
