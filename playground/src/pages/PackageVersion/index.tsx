import { PackageVersion } from "mobrix-ui-preview";
import { SelectProp, StringProp } from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "components/ComponentPage";
import { demoProps, demoRows } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";

const PackageVersionPage = () => (
  <ComponentPage
    name="PackageVersion"
    translations
    render={(t, componentLabel) => {
      return (
        <DemoComponent
          label={componentLabel}
          startColor="#BFBABA"
          props={{
            name: StringProp(""),
            branch: StringProp(""),
            user: StringProp(""),
            source: SelectProp({
              npm: "npm",
              github: "github",
              "github-release": "github-release",
            }),
            ...demoProps,
          }}
          rows={[["name", "branch"], ["user", "source"], ...demoRows]}
        >
          {PackageVersion}
        </DemoComponent>
      );
    }}
  />
);

export default PackageVersionPage;