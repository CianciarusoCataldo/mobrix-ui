import "./styles.css";

import { DividerComponent } from "../../../types";

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
const Divider: DividerComponent = ({ additionalProps, ...commonProps }) =>
  buildMobrixUiStandardComponent({
    name: "divider",
    commonProps: { ...commonProps, a11y: false },
    additionalProps,
  });

export default Divider;
