import "./styles.css";

import { LabelComponent } from "../../../types";

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
const Label: LabelComponent = ({ children, additionalProps, ...commonProps }) =>
  buildMobrixUiStandardComponent({
    name: "label",
    Component: children,
    wrapper: "p",
    commonProps: { ...commonProps, shadow: false },
    additionalProps,
  });

export default Label;
