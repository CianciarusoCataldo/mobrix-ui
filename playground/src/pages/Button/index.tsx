import { Button } from "mobrix-ui-preview";
import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "components/ComponentPage";
import { DEMO_COMMON_PROPS } from "constants/demo-props";

const ButtonPage = () => (
  <ComponentPage
    name="Button"
    translations
    render={(t, componentLabel) => {
      const contentLabel = t("props_children");
      const clickMessage = t("common_click");

      return (
        <Demo
          label={componentLabel}
          props={{
            children: StringProp(contentLabel),
            disabled: BooleanProp(false),
            ...DEMO_COMMON_PROPS,
          }}
        >
          {(props: any) => (
            <div className="flex flex-col items-center">
              <Button onClick={() => alert(clickMessage)} {...props} />
            </div>
          )}
        </Demo>
      );
    }}
  />
);

export default ButtonPage;
