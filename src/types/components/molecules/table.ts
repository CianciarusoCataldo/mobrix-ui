import { BuilderComponent, BuilderProps, ClickableComponent, CommonProps, MoBrixUiComponent } from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Table component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Table
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type TableProps = ClickableComponent<(row: number, column: number) => void> & {
  /** if true, the first row will be used as headers (and not generic data) */
  headers?: boolean;

  /** Table rows */
  rows?: BuilderComponent[][];

  /** Custom class-name applied on every table row */
  rowClassName?: string;

  /** Custom class-name applied on every table cell */
  cellClassName?: string;

  /** Custom class-name applied on every table cell */
  headerClassName?: string;

  headersProps?: Record<string, any>

  cellProps?: Record<string, any>

  rowProps?: Record<string, any>

  propsCallback?: (row: number, column: number) => Record<string, any>

  cellWidth?: string
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Table component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Table
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type TableComponent = MoBrixUiComponent<TableProps>;
