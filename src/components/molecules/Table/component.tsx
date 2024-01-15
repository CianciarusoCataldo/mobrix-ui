import React from "react";

import { MoBrixUiComponent, TableProps } from "../../../types";

const parseClassName = (className: string) => (className ? { className } : {});

const tableComponent: MoBrixUiComponent<TableProps, JSX.Element> = ({
  headers,
  rows = [],
  cellClassName,
  cellProps = {},
  rowClassName,
  rowProps = {},
  headerClassName,
  headersProps = {},
  onClick = () => {},
  propsCallback = () => ({}),
}) => {
  const props = {
    row: { ...parseClassName(rowClassName), ...rowProps },
    cell: { ...parseClassName(cellClassName), ...cellProps },
  };

  let wrappers: {
    wrapper: "td" | "th";
    cellProps: Record<string, any>;
    rowProps: Record<string, any>;
  }[] = rows.map((row) => ({
    wrapper: "td",
    cellProps: props.cell,
    rowProps: props.row,
  }));

  if (headers && rows.length > 0) {
    wrappers[0].wrapper = "th";
    wrappers[0].cellProps = {
      ...parseClassName(headerClassName),
      ...headersProps,
      ...wrappers[0].cellProps,
    };
  }

  return (
    <tbody key="table_body">
      {rows.map((row, rowIndex) => (
        <tr
          data-mbx-table-row="true"
          key={`row_${rowIndex}`}
          {...rowProps}
        >
          {row.map((element, index) => {
            const Wrapper = wrappers[rowIndex].wrapper;

            return (
              <Wrapper
                data-mbx-table-cell="true"
                key={`element_${rowIndex}_${index}`}
                align="center"
                onClick={() => onClick(rowIndex, index)}
                {...wrappers[rowIndex].cellProps}
                {...propsCallback(rowIndex, index)}
              >
                {element}
              </Wrapper>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default tableComponent;
