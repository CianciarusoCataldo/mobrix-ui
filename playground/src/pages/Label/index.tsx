import { StringProp } from "@cianciarusocataldo/demo-ui";

import { Label } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { demoRows, demoProps } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";

const LabelPage = () => (
  <ComponentPage
    name="Label"
    translations
    render={(t, componentLabel) => {
      const labelContent = t("props_value");

      return (
        <DemoComponent
          label={componentLabel}
          props={{
            children: StringProp(labelContent),
            ...demoProps,
          }}
          rows={[["children"], ...demoRows]}
        >
          {Label}
        </DemoComponent>
      );
    }}
  />
);

export default LabelPage;
