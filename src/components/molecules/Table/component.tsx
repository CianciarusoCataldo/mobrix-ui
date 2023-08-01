import React from "react";

import { MoBrixUiComponent, TableProps } from "mobrix-ui-types";

const tableComponent: MoBrixUiComponent<TableProps, JSX.Element[]> = ({
  headers,
  rows = [],
}) => {
  let tableRows = rows;
  const commponents: JSX.Element[] = [];

  if (headers && tableRows.length > 0) {
    commponents.push(
      <thead key="table_head">
        <tr>
          {tableRows[0].map((header, index) => (
            <th key={`header_${index}`} data-mobrix-ui-class="table-cell">
              {header}
            </th>
          ))}
        </tr>
      </thead>
    );

    tableRows.splice(0, 1);
  }

  commponents.push(
    <tbody key="table_body">
      {tableRows.map((row, rowIndex) => (
        <tr
          className={`table-row ${headers ? "header-row" : ""}`}
          data-mobrix-ui-class={`table-row ${
            headers && rowIndex === 0 ? "header-row" : ""
          }`}
          key={`row_${rowIndex}`}
        >
          {row.map((element, index) => (
            <td
              key={`element_${rowIndex}_${index}`}
              data-mobrix-ui-class="table-cell"
            >
              {element}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  return commponents;
};

export default tableComponent;
