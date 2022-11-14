import { DEMO_COMMON_PROPS } from "constants/demo-props";

import { BooleanProp, Demo, NumberProp } from "@cianciarusocataldo/demo-ui";

import { Table } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";

const TablePage = () => (
  <ComponentPage
    name="Table"
    translations
    render={(t, componentLabel) => {
      const cell = t("props_element");
      const header = t("props_header");

      return (
        <Demo
          label={componentLabel}
          props={{
            Rows: NumberProp(2),
            headers: BooleanProp(true),
            ...DEMO_COMMON_PROPS,
          }}
        >
          {({ Rows: numberOfRows, ...props }: any) => {
            let rows = [];
            if (numberOfRows) {
              if (props.headers) {
                rows.push([header, header, header]);
              }
              for (let i = 0; i < numberOfRows; i++) {
                rows.push([cell, cell, cell]);
              }
            }

            return <Table {...props} headers={props.headers} rows={rows} />;
          }}
        </Demo>
      );
    }}
  />
);

export default TablePage;
