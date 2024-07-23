import React from "react";

import { MbxUiComponent, TableProps } from "../../../types";

const parse = (className: string) => (className ? { className } : {});

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
    row: { ...parse(rowClassName), ...rowProps },
    cell: {
      ...parse(cellClassName),
      ...cellProps,
      tabIndex: disabled ? -1 : 0,
    },
    head: { ...parse(headerClassName), ...headersProps, tabIndex: -1 },
  };

  let wrp: any[] = rows.map((row) => ({
    wrp: "td",
    cPrp: props.cell,
    rPrp: props.row,
  }));

  if (headers && rows.length > 0) {
    wrp[0].wrp = "th";
    wrp[0].cPrp = {
      ...wrp[0].cPrp,
      ...props.head,
    };
  }

  return (
    <tbody key="tbl_b">
      {rows.map((row, rInd) => (
        <tr key={`row_${rInd}`} {...wrp[rInd].rPrp}>
          {row.map((el, index) => {
            const Wrapper = wrp[rInd].wrp;

            return (
              <Wrapper
                data-mbx-tcell=""
                key={`el_${rInd}_${index}`}
                align="center"
                onClick={() => onClick(rInd, index)}
                {...wrp[rInd].cPrp}
                {...propsCallback(rInd, index)}
              >
                {el}
              </Wrapper>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default tComponent;
