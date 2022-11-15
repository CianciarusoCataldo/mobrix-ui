import { Button } from "mobrix-ui-preview";
import { BooleanProp, StringProp } from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "components/ComponentPage";
import { DEMO_COMMON_PROPS } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";

const ButtonPage = () => (
  <ComponentPage
    name="Button"
    translations
    render={(t, componentLabel) => {
      const contentLabel = t("props_children");
      const clickMessage = t("common_click");

      return (
        <DemoComponent
          label={componentLabel}
          startColor="#BFBABA"
          props={{
            children: StringProp(contentLabel),
            disabled: BooleanProp(false),
            animated: BooleanProp(false),
            ...DEMO_COMMON_PROPS,
          }}
          rows={[
            ["children", "disabled", "animated"],
            ["className", "shadow"],
            ["dark", "hide", "unstyled"],
          ]}
          parseProps={(props, setProps) => ({
            ...props,
            onClick: () => alert(clickMessage),
          })}
        >
          {Button}
        </DemoComponent>
      );
    }}
  />
);

export default ButtonPage;
