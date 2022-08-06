import { Demo } from "@cianciarusocataldo/demo-ui";

import { Divider } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { DEMO_COMMON_PROPS } from "constants/demo-props";

const DividerPage = () => (
  <ComponentPage
    name="Divider"
    render={(_, componentLabel) => (
      <Demo
        label={componentLabel}
        props={{
          ...DEMO_COMMON_PROPS,
        }}
      >
        {(props: any) => <Divider {...props} />}
      </Demo>
    )}
  />
);

export default DividerPage;
