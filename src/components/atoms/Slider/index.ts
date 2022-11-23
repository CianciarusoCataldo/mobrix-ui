import "./styles.css";

import { SliderComponent } from "./types";
import { buildMobrixUiReactiveComponent } from "../../../utils";

/**
 *
 * @since 2.0.0
 *
 * @param {string} className `common MoBrix-ui prop` - custom className
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component, enabling or not MoBrix-ui custom styles
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component
 * @param {boolean} animated `common MoBrix-ui prop` enable/disable component animations
 * @param {string} key `common MoBrix-ui prop` custom component React key (the standard {@link https://reactjs.org/docs/lists-and-keys.html key parameter})
 * @param {boolean} a11y `common MoBrix-ui prop` enable/disable accessibility features
 * @param {boolean} a11yDark `common MoBrix-ui prop` if the `a11y` parameter is `true`, override standard focus color style with/without dark mode (normally, the color changes accordingly to the `dark` parameter)
 * @param {string} a11yLabel `common MoBrix-ui prop` if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label aria-label}
 *
 * @example <caption>Example Selector usage</caption>
 * import { render } from "react-dom";
 * import { Slider } from 'mobrix-ui';
 *
 * render(<Slider value={30} animated max={120} />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Slider
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
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
  return buildMobrixUiReactiveComponent<number>({
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
