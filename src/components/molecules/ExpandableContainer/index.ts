import "./styles.css";

import { ExpandableContainerComponent } from "../../../types";

import expandableContainerComponent from "./component";
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
const ExpandableContainer: ExpandableContainerComponent = ({
  expanded,
  compact: startCompact,
  children,
  wrapper,
  onChange,
  additionalProps,
  ...commonProps
}) => {
  return buildMbxReactiveComponent(commonProps, (props) => ({
    name: "expandable-container",
    defaultValue: false,
    commonProps: props,
    wrapper,
    inputValue: startCompact,
    additionalProps,
    Component: ({ value, setValue }) =>
      expandableContainerComponent({
        value,
        setValue,
        expanded,
        children,
        onChange,
        ...props,
      }),
    props: (value, setValue) => ({
      additionalProps: {
        "data-mbx-compact": value,
      },
    }),
  }));
};

export default ExpandableContainer;
