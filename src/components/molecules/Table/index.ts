import "./styles.css";

import { TableComponent } from "./types";

import { buildComponent } from "../../../utils";

import tableComponent from "./component";

/**
 * A standard Table component. It follows a CSV-like format for its content.
 *
 * @since 1.0.0
 *
 * @param {(string | JSX.Element | Element)[][]} rows Table rows
 * @param {boolean} headers if true, the first row will be used as headers (and not generic data)
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Table usage</caption>
 *
 * import { render } from "react-dom";
 * import { Table } from 'mobrix-ui';
 *
 * render(<Table rows={[["Header 1", "Header 2"],["Cell 1", "Cell 2"]]} headers />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Table
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Table: TableComponent = ({ headers, rows, ...commonProps }) =>
  buildComponent({
    name: "mobrix-ui-table",
    Component: tableComponent({ headers, rows }),
    commonProps,
  });

export default Table;
