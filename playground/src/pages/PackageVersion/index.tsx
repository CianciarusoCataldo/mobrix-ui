import { PackageVersion } from "mobrix-ui-preview";
import { SelectProp, StringProp } from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "components/ComponentPage";
import { demoProps } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";

const PackageVersionPage = () => (
  <ComponentPage
    name="PackageVersion"
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
            ...demoProps,
          }}
          parseProps={(props, setProps) => ({
            ...props,
            name: StringProp(""),
            branch: StringProp(""),
            user: StringProp(""),
            source: SelectProp({
              npm: "npm",
              github: "github",
              "github-release": "github-release",
            }),
            onClick: () => alert(clickMessage),
          })}
        >
          {PackageVersion}
        </DemoComponent>
      );
    }}
  />
);

export default PackageVersionPage;
