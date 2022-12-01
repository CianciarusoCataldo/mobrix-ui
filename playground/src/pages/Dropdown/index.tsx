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
            const icon = (
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "0.25rem",
                  marginRight: "0.25rem",
                }}
              >
                <i
                  style={{
                    border: "solid",
                    borderWidth: "0 3px 3px 0",
                    display: "block",
                    padding: "3px",
                  }}
                ></i>
              </div>
            );

            return {
              ...props,
              content: [
                {
                  name: elementLabel.replace("<INDEX>", "1"),
                  icon,
                },
                elementLabel.replace("<INDEX>", "2") + " - string",
                {
                  name: elementLabel.replace("<INDEX>", "3"),
                  icon,
                },
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
