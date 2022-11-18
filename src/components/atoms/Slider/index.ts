import "./styles.css";

import { SliderComponent } from "./types";
import { withMobrixUiValue } from "../../../utils";

const Slider: SliderComponent = ({
  onChange,
  value: inputValue,
  min,
  max,
  placeholder,
  readOnly,
  thumbColor,
  ...commonProps
}) => {
  const callback = onChange || ((_: any) => {});

  let extraProps: Record<string, any> = {};

  if (thumbColor) {
    console.log(thumbColor, "yes");
    extraProps.style = {
      "--mobrix-ui-slider-thumb-color": thumbColor,
    };
  }
  return withMobrixUiValue<number>({
    name: "mobrix-ui-slider",
    commonProps,
    inputValue,
    defaultValue: 0,
    wrapper: "input",
    props: (value, setValue) => ({
      additionalProps: {
        type: "range",
        min,
        max,
        value: String(value),
        onChange: (e) => {
          if (!readOnly) {
            callback(e.target.value);
            setValue(e.target.value);
          }
        },
        onInput: (e) => {
          if (!readOnly) {
            callback(e.target.value);
            setValue(e.target.value);
          }
        },
        ...extraProps,
      },
    }),
  });
};

export default Slider;
