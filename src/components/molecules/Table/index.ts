import "./styles.css";

import { TableComponent } from "../../../types";

import { buildMobrixUiStandardComponent } from "../../../tools";

import tableComponent from "./component";

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
const Table: TableComponent = ({
  propsCallback,
  onClick,
  headers,
  rows,
  rowClassName,
  cellClassName,
  headerClassName,
  headersProps,
  cellProps,
  rowProps,
  additionalProps,
  ...commonProps
}) =>
  buildMobrixUiStandardComponent({
    name: "table",
    Component: tableComponent({
      propsCallback,
      onClick,
      headers,
      rows,
      cellClassName,
      headerClassName,
      rowClassName,
      cellProps,
      rowProps,
      headersProps,
      ...commonProps,
    }),
    commonProps,
    additionalProps,
    wrapper: "table",
  });

export default Table;
