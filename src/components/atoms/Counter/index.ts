import "./styles.css";

import { CounterComponent } from "../../../types";

import {
  buildMobrixUiReactiveComponent,
  parseCommonProps,
} from "../../../tools";

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
const Counter: CounterComponent = ({
  onChange = () => {},
  value: inputValue,
  placeholder,
  readOnly,
  max,
  min,
  additionalProps = {},
  ...commonProps
}) => {
  const parsedCommonProps = parseCommonProps(commonProps);

  return buildMobrixUiReactiveComponent<number | undefined>({
    wrapper: "input",
    name: "counterbox",
    inputValue,
    defaultValue: undefined,
    props: (value, setValue) => ({
      additionalProps: {
        ...additionalProps,
        disabled: commonProps.disabled,
        type: "number",
        value: value,
        placeholder,
        readOnly,
        max,
        min,
        onChange: (e) => {
          if (!readOnly) {
            onChange(Number(e.target.value));
            setValue(Number(e.target.value));
          }
        },
      },
    }),
    commonProps: {
      ...parsedCommonProps,
      hover: parsedCommonProps.hover && !readOnly,
    },
  });
};

export default Counter;
