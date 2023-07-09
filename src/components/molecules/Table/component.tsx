import classNames from "classnames";
import React from "react";
import { MoBrixUiComponent } from "../../../types/global";
import { TableProps } from "../../../types/components/molecules/Table";

const tableComponent: MoBrixUiComponent<TableProps> = ({ headers, rows }) => {
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

  return (
    <div
      className="rows"
      style={{
        gridTemplateRows,
        gridTemplateColumns,
      }}
    >
      {elements}
    </div>
  );
};

export default tableComponent;
