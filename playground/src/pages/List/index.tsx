import { demoRows, demoProps } from "constants/demo-props";

import { BooleanProp, NumberProp } from "@cianciarusocataldo/demo-ui";

import OffIcon from "../Toggle/off.svg";
import { List } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";

const ListPage = () => (
  <ComponentPage
    translations
    name="List"
    render={(t, componentLabel) => {
      const elementsLabel = t("props", { context: "elements" });
      const clickableElementsLabel = "Elementi clickabili";

      return (
        <DemoComponent
          label={componentLabel}
          props={{
            ...demoProps,
            [elementsLabel]: NumberProp(3),
            [clickableElementsLabel]: BooleanProp(false),
          }}
          rows={[[elementsLabel, clickableElementsLabel], ...demoRows]}
          parseProps={(props) => {
            let newProps = { ...props };
            delete newProps[elementsLabel];
            delete newProps[clickableElementsLabel];
            newProps.elements = [];

            newProps.elements.push(
              <div className="flex flex-row">
                <img alt="" key="element_image" src={OffIcon} width={15} />
                <span key="element_label" className="ml-2">
                  Custom element
                </span>
              </div>
            );

            for (let i = 0; i < (props[elementsLabel] as number); ++i) {
              newProps.elements.push(
                t("props", { context: "elements_single", index: i + 1 })
              );
            }

            if (props[clickableElementsLabel]) {
              newProps["onChange"] = (index: number) => console.log(index);
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
