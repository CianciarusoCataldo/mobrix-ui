import "./styles.css";

import { InputComponent } from "../../../types";

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
const Input: InputComponent = ({
  onChange = () => {},
  value: inputValue,
  placeholder,
  readOnly,
  additionalProps = {},
  autoresizable,
  ...commonProps
}) => {
  const parsedCommonProps = parseCommonProps(commonProps);

  return buildMobrixUiReactiveComponent<string | undefined>({
    commonProps: {
      ...parsedCommonProps,
      hover: parsedCommonProps.hover && !readOnly,
    },
    name: "inputbox",
    wrapper: "input",
    props: (value, setValue) => ({
      additionalProps: {
        ...additionalProps,
        ...(autoresizable && {
          "data-mbx-autoresizable": !!autoresizable,
          size: Math.ceil(value.length / 2) + (value.length > 0 ? 0 : 1),
        }),
        type: "text",
        value,
        placeholder,
        disabled: commonProps.disabled,
        readOnly: readOnly || commonProps.disabled,
        onChange: (e) => {
          const newValue = e.target.value ? e.target.value : "";
          setValue(newValue);
        },
      },
    }),
    inputValue,
    defaultValue: "",
  });
};

export default Input;
