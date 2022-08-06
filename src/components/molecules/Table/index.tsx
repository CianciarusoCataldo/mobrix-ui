import "./styles.css";
import { TableComponent } from "./types";

import React from "react";

import classNames from "classnames";
import { buildBoxComponent } from "../../../utils";

/**
 * A standard Table component. It follows a CSV-like format for its content.
 *
 * @since 1.0.0
 *
 * @param {(string | JSX.Element | Element)[][]} rows Table rows
 * @param {boolean} headers if true, the first row will be used as headers (and not generic data)
 * @param {JSX.Element | Element | string} label `common MoBrix-ui prop` - Component label, showed at the top
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
const Table: TableComponent = ({ label, headers, rows, ...commonProps }) => {
  let gridTemplateRows = "";
  let gridTemplateColumns = "";

  let tableRows = rows || [];

  let elements: (JSX.Element | string)[][] = tableRows.map((row, rowIndex) =>
    row.map((element, index) => (
      <div
        key={`element_${rowIndex}_${index}`}
        className={classNames({
          header: headers && rowIndex === 0,
          element: !headers || rowIndex > 0,
        })}
      >
        {element}
      </div>
    ))
  );

  if (tableRows.length > 0) {
    for (let i = 0; i < tableRows.length; i++) {
      gridTemplateRows += " auto";
    }

    for (let i = 0; i < tableRows[0].length; i++) {
      gridTemplateColumns += " auto";
    }
  }

  return buildBoxComponent({
    callBack: () => ({
      name: "mobrix-ui-table",
      Component: (
        <div
          className="rows"
          style={{
            gridTemplateRows,
            gridTemplateColumns,
          }}
        >
          {elements}
        </div>
      ),
      commonProps,
    }),
    label,
  });
};

export default Table;
