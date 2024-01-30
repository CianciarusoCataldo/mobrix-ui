import "./styles.css";

import { SelectorComponent } from "../../../types";

import { buildMobrixUiReactiveComponent } from "../../../tools";

import selectorComponent from "./component";

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
const Selector: SelectorComponent = ({
  elements,
  value: inputValue,
  onChange = () => {},
  additionalProps = {},
  optionClassName,
  ...commonProps
}) =>
  buildMobrixUiReactiveComponent<number | undefined>({
    wrapper: "select",
    name: "selector",
    defaultValue: undefined,
    inputValue,
    commonProps,
    props: (value, setValue) => ({
      additionalProps: {
        ...additionalProps,
        disabled: commonProps.disabled,
        value,
        onChange: (e) => {
          onChange(e.target.value);
          setValue(e.target.value);
        },
      },
    }),
    Component: ({ value, setValue }) =>
      selectorComponent({ elements, value, setValue, optionClassName }),
  });

export default Selector;
