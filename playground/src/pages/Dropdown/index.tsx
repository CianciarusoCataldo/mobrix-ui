import { NumberProp } from "@cianciarusocataldo/demo-ui";

import { Dropdown } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { demoRows, demoProps } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";

const DropdownPage = () => (
  <ComponentPage
    name="Dropdown"
    translations
    render={(t, componentLabel) => {
      const elementLabel = t("props_element", {
        index: "<INDEX>",
      });

      return (
        <DemoComponent
          label={componentLabel}
          props={{
            value: NumberProp(0),
            ...demoProps,
          }}
          rows={[["value"], ...demoRows]}
          startColor="#ebe5e2"
          parseProps={(props) => {
            return {
              ...props,
              elements: [
                elementLabel.replace("<INDEX>", "1"),
                elementLabel.replace("<INDEX>", "2") + " - string",
                elementLabel.replace("<INDEX>", "3"),
              ],
            };
          }}
        >
          {Dropdown}
        </DemoComponent>
      );
    }}
  />
);

export default DropdownPage;
