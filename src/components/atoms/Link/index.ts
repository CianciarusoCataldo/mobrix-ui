import "./styles.css";

import { LinkComponent } from "../../../types";

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
const Link: LinkComponent = ({
  to,
  children,
  newTab,
  additionalProps = {},
  ...commonProps
}) =>
  buildMbxStandardComponent({ ...commonProps, shadow: false }, (props) => ({
    name: "link",
    Component: children,
    commonProps: props,
    additionalProps: {
      ...additionalProps,
      "data-mbx-opacityhover": props.hover && !props.disabled,
      ...(!props.disabled && {
        href: to,
        target: newTab ? "_blank" : undefined,
      }),
    },
    wrapper: props.disabled ? "span" : "a",
  }));

export default Link;
