import { BooleanProp, StringProp } from "@cianciarusocataldo/demo-ui";

import { demoRows, demoProps } from "constants/demo-props";

import { ComponentPage } from "components/ComponentPage";

import { Password } from "mobrix-ui-preview";
import DemoComponent from "components/DemoComponent";

const PasswordPage = () => (
  <ComponentPage
    name="Password"
    render={(_, componentLabel) => (
      <DemoComponent
        label={componentLabel}
        startColor="#C3BBBB"
        props={{
          value: StringProp(""),
          placeholder: StringProp(""),
          readOnly: BooleanProp(false),
          show: BooleanProp(false),
          autoresizable: BooleanProp(false),
          ...demoProps,
          active: BooleanProp(true),
        }}
        rows={[
          ["value", "readOnly"],
          ["show", "placeholder", "autoresizable"],
          ...demoRows,
        ]}
      >
        {Password}
      </DemoComponent>
    )}
  />
);

export default PasswordPage;
