import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { DEMO_COMMON_PROPS } from "constants/demo-props";

import { ComponentPage } from "components/ComponentPage";

import { Input } from "mobrix-ui-preview";

const InputPage = () => (
  <ComponentPage
    name="Input"
    render={(_, componentLabel) => (
      <Demo
        label={componentLabel}
        startColor="#C3BBBB"
        props={{
          value: StringProp(""),
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
            <Input {...props} />
          </div>
        )}
      </Demo>
    )}
  />
);

export default InputPage;
