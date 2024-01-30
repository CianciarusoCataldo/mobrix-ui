import "./styles.css";

import { DropdownComponent } from "../../../types";

import dropdownComponentBuilder from "./component";
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
const Dropdown: DropdownComponent = ({
  elements,
  onChange,
  value: inputValue,
  hideArrow,
  additionalProps,
  ...commonProps
}) =>
  buildMbxReactiveComponent(commonProps, (props) => ({
    name: "dropdown",
    defaultValue: 0,
    inputValue,
    additionalProps,
    commonProps: props,
    props: (value, setValue) =>
      dropdownComponentBuilder({
        elements,
        onChange,
        value,
        hideArrow,
        setValue,
        ...props,
      }),
  }));

export default Dropdown;
