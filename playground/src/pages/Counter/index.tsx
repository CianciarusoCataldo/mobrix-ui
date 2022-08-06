import {
  BooleanProp,
  Demo,
  NumberProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { Counter } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { DEMO_COMMON_PROPS } from "constants/demo-props";

const CounterPage = () => (
  <ComponentPage
    name="Counter"
    render={(_, componentLabel) => (
      <Demo
        label={componentLabel}
        startColor="#C3BBBB"
        props={{
          value: NumberProp(0),
          label: StringProp("label"),
          placeholder: StringProp("placeholder"),
          readOnly: BooleanProp(false),
          ...DEMO_COMMON_PROPS,
        }}
        rows={[
          ["value", "readOnly", "placeholder"],
          ["unstyled", "className", "label"],
          ["shadow", "dark", "hide"],
        ]}
      >
        {(props: any) => (
          <div className="flex flex-col items-center">
            <Counter {...props} />
          </div>
        )}
      </Demo>
    )}
  />
);

export default CounterPage;
