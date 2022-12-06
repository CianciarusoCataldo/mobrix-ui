import { BooleanProp, StringProp } from "@cianciarusocataldo/demo-ui";

import { demoRows, demoProps } from "constants/demo-props";

import { Card } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";

const CardPage = () => (
  <ComponentPage
    name="Card"
    render={(_, componentLabel) => (
      <DemoComponent
        label={componentLabel}
        props={{
          dismissable: BooleanProp(false),
          header: StringProp("Header"),
          body: StringProp("Body"),
          footer: StringProp("Footer"),
          ...demoProps,
        }}
        parseProps={(props) => {
          if (props["dismissable"]) {
            return { ...props, onClose: () => {} };
          } else return props;
        }}
        rows={[["footer", "header"], ["body", "dismissable"], ...demoRows]}
        startColor="#999"
      >
        {Card}
      </DemoComponent>
    )}
  />
);

export default CardPage;
