import "./styles.css";

import { IconButtonComponent } from "../../../types/components/atoms/icon-button";
import { buildMbxStandardComponent } from "../../../tools/utils";

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
const IconButton: IconButtonComponent = ({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  additionalProps = {},
  ...commonProps
}) =>
  buildMbxStandardComponent(commonProps, (props) => ({
    name: "icon-button",
    wrapper: "button",
    additionalProps: {
      ...additionalProps,
      ...(!props.disabled && {
        onClick,
        onMouseEnter,
        onMouseLeave,
      }),
    },
    Component: children,
    commonProps: { ...props, shadow: false },
  }));

export default IconButton;
