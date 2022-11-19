import "./styles.css";

import { RadioButtonComponent } from "./types";

import { withMobrixUiValue } from "../../../utils";

import component from "./component";

const RadioButton: RadioButtonComponent = ({
  value: inputValue,
  onChange,
  onClick,
  deselectable = true,
  ...commonProps
}) => {
  return withMobrixUiValue<boolean>({
    name: "mobrix-ui-radio-button",
    defaultValue: false,
    inputValue,
    commonProps,
    props: (value, setValue) => ({
      additionalProps: {
        onClick: () => {
          if (!value || deselectable) {
            onChange && onChange(!value);
            onClick && onClick();
            setValue(!value);
          }
        },
      },
      Component: value ? component : "",
    }),
  });
};

export default RadioButton;
