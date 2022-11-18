import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { Label, LabelProps } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { DEMO_COMMON_PROPS } from "constants/demo-props";

const LabelPage = () => (
  <ComponentPage
    name="Label"
    translations
    render={(t, componentLabel) => {
      const labelContent = t("props_value");

      return (
        <Demo
          label={componentLabel}
          props={{
            children: StringProp(labelContent),
            ...DEMO_COMMON_PROPS,
            shadow: BooleanProp(false),
          }}
          rows={[
            ["value", "dark", "shadow"],
            ["className", "hide", "unstyled"],
          ]}
        >
          {(props: LabelProps) => {
            return <Label {...props} />;
          }}
        </Demo>
      );
    }}
  />
);

export default LabelPage;
