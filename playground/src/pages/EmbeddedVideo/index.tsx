import { EmbeddedVideo } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { demoRows, demoProps } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";
import { StringProp } from "@cianciarusocataldo/demo-ui";

const DividerPage = () => (
  <ComponentPage
    name="EmbeddedVideo"
    render={(_, componentLabel) => (
      <DemoComponent
        label={componentLabel}
        props={{
          url: StringProp("https://www.youtube.com/watch?v=QZXc39hT8t4"),
          ...demoProps,
        }}
        rows={[["url"], ...demoRows]}
      >
        {EmbeddedVideo}
      </DemoComponent>
    )}
  />
);

export default DividerPage;
