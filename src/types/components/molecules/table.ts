import {
  BuilderComponent,
  ClickableComponent,
  MbxSharedProps,
  MbxUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Table component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Table
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type TableProps = ClickableComponent<
  (row: number, column: number) => void
> & {
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

  /** Custom props applied on every table header cell */
  headersProps?: Record<string, any>;

  /** Custom props applied on every table cell */
  cellProps?: Record<string, any>;

  /** Custom props applied on every table row */
  rowProps?: Record<string, any>;

  /** Custom function to add custom props depending on Table row and column */
  propsCallback?: (row: number, column: number) => Record<string, any>;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Table component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Table
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type TableComponent = MbxUiComponent<TableProps>;
