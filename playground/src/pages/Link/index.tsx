import { demoRows, demoProps } from "constants/demo-props";

import { BooleanProp, StringProp } from "@cianciarusocataldo/demo-ui";

import { Link } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";

const LinkPage = () => (
  <ComponentPage
    name="Link"
    render={(_, componentLabel) => (
      <DemoComponent
        label={componentLabel}
        props={{
          to: StringProp("https://github.com/CianciarusoCataldo/mobrix-ui"),
          children: StringProp("children"),
          newTab: BooleanProp(true),
          ...demoProps,
        }}
        rows={[["to", "children"], ...demoRows]}
      >
        {(props: any) => (
          <div className="m-auto flex flex-col items-center text-xl">
            <Link {...props} />
          </div>
        )}
      </DemoComponent>
    )}
  />
);

export default LinkPage;
