import {
  BoxComponent,
  BuilderComponent,
  CommonProps,
  MoBrixUiComponent,
} from "../../../utils/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Table component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Table
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type TableProps = CommonProps &
  Omit<BoxComponent, "value" | "icon"> & {
    /** if true, the first row will be used as headers (and not generic data) */
    headers?: boolean;

    /** Table rows */
    rows?: BuilderComponent[][];
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Table component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Table
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type TableComponent = MoBrixUiComponent<TableProps>;
