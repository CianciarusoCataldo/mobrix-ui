import {
  BooleanProp,
  NumberProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { Counter } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { demoRows, demoProps } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";

const CounterPage = () => (
  <ComponentPage
    name="Counter"
    render={(_, componentLabel) => (
      <DemoComponent
        label={componentLabel}
        startColor="#C3BBBB"
        props={{
          value: NumberProp(0),
          placeholder: StringProp("placeholder"),
          readOnly: BooleanProp(false),
          ...demoProps,
        }}
        rows={[["value", "readOnly", "placeholder"], ...demoRows]}
      >
        {Counter}
      </DemoComponent>
    )}
  />
);

export default CounterPage;
