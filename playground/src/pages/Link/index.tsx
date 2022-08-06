import { DEMO_COMMON_PROPS } from "constants/demo-props";

import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { Link } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";

const LinkPage = () => (
  <ComponentPage
    name="Link"
    render={(_, componentLabel) => (
      <Demo
        label={componentLabel}
        props={{
          to: StringProp("https://github.com/CianciarusoCataldo/mobrix-ui"),
          children: StringProp("children"),
          newTab: BooleanProp(true),
          ...DEMO_COMMON_PROPS,
          shadow: BooleanProp(false),
        }}
        rows={[
          ["to", "className", "children"],
          ["newTab", "hide", "dark", "unstyled"],
        ]}
      >
        {(props: any) => (
          <div className="m-auto flex flex-col items-center text-xl">
            <Link {...props} />
          </div>
        )}
      </Demo>
    )}
  />
);

export default LinkPage;
