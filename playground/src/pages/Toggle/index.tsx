import { DEMO_COMMON_PROPS } from "constants/demo-props";

import OnIcon from "./on.svg";
import OffIcon from "./off.svg";

import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { Toggle } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";

const TogglePage = () => (
  <ComponentPage
    name="Toggle"
    translations
    render={(t, componentLabel) => {
      const iconLabel = t("props_icons");

      return (
        <Demo
          label={componentLabel}
          startColor="#999"
          props={{
            value: BooleanProp(true),
            [iconLabel]: BooleanProp(false),
            label: StringProp("label"),
            ...DEMO_COMMON_PROPS,
          }}
          rows={[
            ["value", "Custom icons", "label", "dark"],
            ["className", "shadow", "unstyled", "hide"],
          ]}
        >
          {(props: any, setProps: (props: any) => void) => {
            let actualProps = { ...props };
            delete actualProps[iconLabel];
            if (props[iconLabel]) {
              actualProps.onIcon = <img alt="" src={OnIcon} width={30} />;
              actualProps.offIcon = <img alt="" src={OffIcon} width={30} />;
            }

            return (
              <div className="flex flex-col items-center">
                <Toggle
                  {...actualProps}
                  onChange={() => setProps({ ...props, value: !props.value })}
                />
              </div>
            );
          }}
        </Demo>
      );
    }}
  />
);

export default TogglePage;
