import "./styles.css";

import { ButtonComponent } from "../../../types";

import { buildMobrixUiStandardComponent } from "../../../tools";

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
const Button: ButtonComponent = ({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  additionalProps = {},
  ...commonProps
}) =>
  buildMobrixUiStandardComponent({
    name: "button",
    wrapper: "button",
    additionalProps: {
      ...additionalProps,
      disabled: commonProps.disabled,
      onClick,
      onMouseEnter,
      onMouseLeave,
    },
    Component: children,
    commonProps,
  });

export default Button;
