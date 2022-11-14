import { BooleanProp, Demo, SelectProp } from "@cianciarusocataldo/demo-ui";

import ReactImage from "./react.svg";
import ReduxImage from "./redux.svg";

import { DEMO_COMMON_PROPS } from "constants/demo-props";

import { Spinner } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";

const SpinnerPage = () => (
  <ComponentPage
    name="Spinner"
    translations
    render={(t, componentLabel) => {
      const notSetLabel = t("props_value_notSet");
      const customValueLabel = t("props_value_custom");
      const customStatesLabel = t("props_statuses_custom");

      return (
        <Demo
          label={componentLabel}
          props={{
            value: SelectProp({
              [notSetLabel]: undefined,
              success: "success",
              error: "error",
              loading: "loading",
            }),
            [customStatesLabel]: BooleanProp(false),
            [customValueLabel]: SelectProp({
              [notSetLabel]: undefined,
              react: "react",
              redux: "redux",
            }),
            ...DEMO_COMMON_PROPS,
            shadow: BooleanProp(false),
          }}
          rows={[
            ["value", customStatesLabel, customValueLabel],
            ["className", "dark"],
            ["shadow", "unstyled", "hide"],
          ]}
        >
          {(props: any) => {
            let componentProps = { ...props };

            delete componentProps[customStatesLabel];
            delete componentProps[customValueLabel];

            if (props[customStatesLabel]) {
              componentProps.statuses = {
                react: (
                  <div style={{ width: "8rem", height: "8rem" }}>
                    <img src={ReactImage} width="125px" height="125px" alt="" />
                  </div>
                ),
                redux: (
                  <div style={{ width: "8rem", height: "8rem" }}>
                    <img src={ReduxImage} alt="" width="125px" height="125px" />
                  </div>
                ),
              };
              componentProps.value = props[customValueLabel];
            } else {
              componentProps.statuses = undefined;
              componentProps.value = props.value;
            }

            return (
              <div className="flex flex-col items-center">
                <Spinner
                  {...componentProps}
                  className={
                    props.className.length > 0 ? props.className : "w-32"
                  }
                />
              </div>
            );
          }}
        </Demo>
      );
    }}
  />
);

export default SpinnerPage;
