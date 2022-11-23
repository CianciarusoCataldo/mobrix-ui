import { BooleanProp, NumberProp } from "@cianciarusocataldo/demo-ui";

import { Dropdown } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { demoRows, demoProps } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";

const DropdownPage = () => (
  <ComponentPage
    name="Dropdown"
    translations
    render={(t, componentLabel) => {
      const iconsLabel = t("props_icons");
      const elementLabel = t("props_element", {
        index: "<INDEX>",
      });

      return (
        <DemoComponent
          label={componentLabel}
          props={{
            value: NumberProp(0),
            [iconsLabel]: BooleanProp(false),
            ...demoProps,
          }}
          rows={[["value", iconsLabel], ...demoRows]}
          startColor="#ebe5e2"
          parseProps={(props) => {
            let newProps: Record<string, any> = { ...props };
            newProps.icon = props[iconsLabel] ? (
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
            ) : undefined;

            newProps.content = [
              {
                name: elementLabel.replace("<INDEX>", "1"),
                icon: newProps.icon,
              },
              {
                name: elementLabel.replace("<INDEX>", "2"),
                icon: newProps.icon,
              },
            ];

            delete newProps[iconsLabel];
            return newProps;
          }}
        >
          {Dropdown}
        </DemoComponent>
      );
    }}
  />
);

export default DropdownPage;
