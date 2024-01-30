import "./styles.css";

import { ContainerComponent } from "../../../types";

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
const Container: ContainerComponent = ({
  children,
  wrapper,
  additionalProps,
  ...commonProps
}) =>
  buildMobrixUiStandardComponent({
    name: "container",
    Component: children,
    commonProps,
    additionalProps,
    wrapper,
  });

export default Container;
