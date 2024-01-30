import "./styles.css";

import { SpinnerComponent } from "../../../types";

import { buildMobrixUiStandardComponent } from "../../../tools";

import defaultIcons from "./icons";

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
const Spinner: SpinnerComponent = ({
  value,
  statuses = defaultIcons,
  additionalProps,
  ...commonProps
}) =>
  buildMobrixUiStandardComponent({
    name: "spinner",
    commonProps,
    additionalProps,
    Component:
      value && statuses[value]
        ? statuses[value]
        : statuses.loading || defaultIcons.loading,
  });

export default Spinner;
