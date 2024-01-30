import "./styles.css";

import { ListComponent } from "../../../types";

import { buildMobrixUiStandardComponent } from "../../../tools";

import listComponent from "./component";

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
const List: ListComponent = ({
  elements,
  onClick,
  additionalProps,
  ...commonProps
}) =>
  buildMobrixUiStandardComponent({
    name: "list",
    Component: listComponent({ elements, onClick, ...commonProps }),
    additionalProps,
    commonProps: { ...commonProps, shadow: false },
  });

export default List;
