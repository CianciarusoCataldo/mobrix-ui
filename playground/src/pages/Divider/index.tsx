import { Divider } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { demoRows, demoProps } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";

const DividerPage = () => (
  <ComponentPage
    name="Divider"
    render={(_, componentLabel) => (
      <DemoComponent
        label={componentLabel}
        props={{
          ...demoProps,
        }}
        rows={demoRows}
      >
        {Divider}
      </DemoComponent>
    )}
  />
);

export default DividerPage;
