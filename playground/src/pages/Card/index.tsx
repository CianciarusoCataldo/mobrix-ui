import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { DEMO_COMMON_PROPS } from "constants/demo-props";

import { Card } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";

const CardPage = () => (
  <ComponentPage
    name="Card"
    render={(_, componentLabel) => (
      <Demo
        className="m-0 p-0"
        label={componentLabel}
        props={{
          dismissable: BooleanProp(false),
          header: StringProp("Header"),
          body: StringProp("Body"),
          footer: StringProp("Footer"),
          ...DEMO_COMMON_PROPS,
        }}
        rows={[
          ["footer", "header"],
          ["body", "dismissable"],
          ["className", "shadow"],
          ["dark", "hide", "unstyled"],
        ]}
        startColor="#999"
      >
        {(props: any) => (
          <div className="flex flex-col items-center">
            <Card {...props} />
          </div>
        )}
      </Demo>
    )}
  />
);

export default CardPage;
