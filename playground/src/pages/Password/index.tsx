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
          ...demoProps,
        }}
        rows={[["value", "readOnly"], ["show", "placeholder"], ...demoRows]}
      >
        {Password}
      </DemoComponent>
    )}
  />
);

export default PasswordPage;
