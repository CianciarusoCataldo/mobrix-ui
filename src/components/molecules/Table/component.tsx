import React from "react";

import { MbxUiComponent, TableProps } from "../../../types";

const parseClassName = (className: string) => (className ? { className } : {});

const tComponent: MbxUiComponent<TableProps, JSX.Element> = ({
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
  disabled,
}) => {
  const props = {
    row: { ...parseClassName(rowClassName), ...rowProps },
    cell: {
      ...parseClassName(cellClassName),
      ...cellProps,
      tabIndex: disabled ? -1 : 0,
    },
    head: { ...parseClassName(headerClassName), ...headersProps, tabIndex: -1 },
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
      ...props.head,
      ...wrappers[0].cellProps,
    };
  }

  return (
    <tbody key="tbl_b">
      {rows.map((row, rowIndex) => (
        <tr key={`row_${rowIndex}`} {...wrappers[rowIndex].rowProps}>
          {row.map((element, index) => {
            const Wrapper = wrappers[rowIndex].wrapper;

            return (
              <Wrapper
                data-mbx-tcell=""
                key={`el_${rowIndex}_${index}`}
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

export default tComponent;
