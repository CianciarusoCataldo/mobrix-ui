import { Card, Form, TabViewer } from "mobrix-ui-preview";
import {
  HiddenProp,
  NumberProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "components/ComponentPage";
import { demoRows, demoProps } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";

const TabViewerPage = () => (
  <ComponentPage
    name="TabViewer"
    translations
    render={(t, componentLabel) => {
      return (
        <DemoComponent
          label={componentLabel}
          startColor="#BFBABA"
          props={{
            tabClassName: StringProp(""),
            tabSelectedClassName: StringProp(""),
            tabUnselectedClassName: StringProp(""),
            tabViewClassName: StringProp(""),
            selected: NumberProp(0),
            tabs: HiddenProp([
              {
                label: "Tab 1",
                content: (
                  <div className="bg-white p-4">
                    <Card
                      shadow
                      header={"Example card"}
                      body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        `}
                    />
                  </div>
                ),
              },
              {
                label: "Tab 2",
                content: (
                  <div>
                    <Form
                      shadow
                      fields={{
                        field_1: { header: "Example field", type: "boolean" },
                      }}
                      buttonContent={"Submit"}
                    />
                  </div>
                ),
              },
              {
                label: "Tab 3",
                content: <div>Tab 3 content</div>,
              },
            ]),
            ...demoProps,
          }}
          rows={[
            ["selected", "tabClassName", "tabSelectedClassName"],
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
