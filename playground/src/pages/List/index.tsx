import { demoRows, demoProps } from "constants/demo-props";

import { NumberProp } from "@cianciarusocataldo/demo-ui";

import { List } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";

const ListPage = () => (
  <ComponentPage
    translations
    name="List"
    render={(t, componentLabel) => {
      const elementsLabel = t("props", { context: "elements" });

      return (
        <DemoComponent
          label={componentLabel}
          props={{
            ...demoProps,
            [elementsLabel]: NumberProp(3),
          }}
          rows={[[elementsLabel], ...demoRows]}
          parseProps={(props) => {
            let newProps = { ...props };
            delete newProps[elementsLabel];
            newProps.elements = [];
            for (let i = 0; i < (props[elementsLabel] as number); ++i) {
              newProps.elements.push(
                t("props", { context: "elements_single", index: i + 1 })
              );
            }
            return newProps;
          }}
        >
          {List}
        </DemoComponent>
      );
    }}
  >
    {}
  </ComponentPage>
);

export default ListPage;
