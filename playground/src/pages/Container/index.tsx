import { StringProp } from "@cianciarusocataldo/demo-ui";

import { Container } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { demoRows, demoProps } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";

const ContainerPage = () => (
  <ComponentPage
    name="Container"
    translations
    render={(t, componentLabel) => (
      <DemoComponent
        label={componentLabel}
        props={{
          children: StringProp(t("props_children")),
          ...demoProps,
        }}
        rows={[["children"], ...demoRows]}
      >
        {Container}
      </DemoComponent>
    )}
  />
);

export default ContainerPage;
