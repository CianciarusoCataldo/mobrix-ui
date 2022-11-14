import { BooleanProp, Demo } from "@cianciarusocataldo/demo-ui";

import { Dropdown } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { DEMO_COMMON_PROPS } from "constants/demo-props";

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
        <Demo
          label={componentLabel}
          props={{
            [iconsLabel]: BooleanProp(false),
            ...DEMO_COMMON_PROPS,
          }}
          startColor="#ebe5e2"
        >
          {(props: any) => {
            const icon = props[iconsLabel] ? (
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

            const elements = [
              {
                name: elementLabel.replace("<INDEX>", "1"),
                icon: icon,
              },
              {
                name: elementLabel.replace("<INDEX>", "2"),
                icon: icon,
              },
            ];

            return (
              <div className="flex flex-col items-center bg-transparent ">
                <Dropdown
                  className={props.className}
                  hide={props.hide}
                  dark={props.dark}
                  shadow={props.shadow}
                  unstyled={props.unstyled}
                  content={elements}
                />
              </div>
            );
          }}
        </Demo>
      );
    }}
  />
);

export default DropdownPage;
