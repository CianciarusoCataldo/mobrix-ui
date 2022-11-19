import "./styles.css";

import { RadioButtonGroupComponent } from "./types";

import { withMobrixUiValue } from "../../../utils";

import radioButtonGroupComponent from "./component";

/**
 * A flexible and fully customizable radio buttons group
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/RadioButtonGroup
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const RadioButtonGroup: RadioButtonGroupComponent = ({
  value: inputValue,
  buttons,
  elementClassName,
  ...commonProps
}) => {
  return withMobrixUiValue({
    name: "mobrix-ui-radio-button-group",
    defaultValue: -1,
    inputValue,
    commonProps,
    render: (value, setValue) =>
      radioButtonGroupComponent({
        value,
        setValue,
        buttons,
        elementClassName,
        dark: commonProps.dark,
      }),
  });
};

export default RadioButtonGroup;
