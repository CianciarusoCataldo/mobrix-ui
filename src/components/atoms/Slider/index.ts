import "./styles.css";

import { SliderComponent } from "../../../types";

import { buildMbxReactiveComponent } from "../../../tools";

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
const Slider: SliderComponent = ({
  onChange = () => {},
  value: inputValue,
  min,
  max,
  readOnly,
  additionalProps = {},
  ...commonProps
}) =>
  buildMbxReactiveComponent<number>(commonProps, (parsedProps) => ({
    name: "slider",
    commonProps: parsedProps,
    inputValue,
    defaultValue: 0,
    wrapper: "input",
    props: (value, setValue) => {
      const callback =
        parsedProps.disabled && !readOnly
          ? (e: any) => {
              onChange(e.target.value);
              setValue(e.target.value);
            }
          : () => {};

      return {
        additionalProps: {
          ...additionalProps,
          type: "range",
          min,
          max,
          readOnly,
          disabled: parsedProps.disabled,
          value: String(value),
          onChange: callback,
          onInput: callback,
        },
      };
    },
  }));

export default Slider;
