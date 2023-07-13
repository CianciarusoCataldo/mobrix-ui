import { TabViewer } from "mobrix-ui-preview";
import { HiddenProp, StringProp } from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "components/ComponentPage";
import { demoRows, demoProps } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";

const TabViewerPage = () => (
  <ComponentPage
    name="TabViewer"
    translations
    render={(t, componentLabel) => {
      const contentLabel = t("props_children");

      return (
        <DemoComponent
          label={componentLabel}
          startColor="#BFBABA"
          props={{
            tabClassName: StringProp(""),
            tabSelectedClassName: StringProp(""),
            tabUnselectedClassName: StringProp(""),
            tabViewClassName: StringProp(""),
            value: HiddenProp(0),
            tabs: HiddenProp([
              {
                label: "Tab 1",
                content: <div>Tab 1 content</div>,
              },
              { label: "Tab 2", content: <div>Tab 2 content</div> },
              { label: "Tab 3", content: <div>Tab 3 content</div> },
            ]),
            ...demoProps,
          }}
          rows={[
            ["tabClassName", "tabSelectedClassName"],
            ["tabUnselectedClassName", "tabViewClassName"],
            ...demoRows,
          ]}
        >
          {TabViewer}
        </DemoComponent>
      );
    }}
  />
);

export default TabViewerPage;
