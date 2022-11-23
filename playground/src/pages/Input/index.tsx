import { BooleanProp, StringProp } from "@cianciarusocataldo/demo-ui";

import { demoRows, demoProps } from "constants/demo-props";

import { ComponentPage } from "components/ComponentPage";

import { Input } from "mobrix-ui-preview";
import DemoComponent from "components/DemoComponent";

const InputPage = () => (
  <ComponentPage
    name="Input"
    render={(_, componentLabel) => (
      <DemoComponent
        label={componentLabel}
        startColor="#C3BBBB"
        props={{
          value: StringProp(""),
          placeholder: StringProp("placeholder"),
          readOnly: BooleanProp(false),
          ...demoProps,
        }}
        rows={[["value", "readOnly", "placeholder"], ...demoRows]}
      >
        {Input}
      </DemoComponent>
    )}
  />
);

export default InputPage;
