import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { Container } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { DEMO_COMMON_PROPS } from "constants/demo-props";

const ContainerPage = () => (
  <ComponentPage
    name="Container"
    translations
    render={(t, componentLabel) => {
      const childrenText = t("props_children");

      return (
        <Demo
          label={componentLabel}
          props={{
            children: StringProp(childrenText),
            animated: BooleanProp(false),
            ...DEMO_COMMON_PROPS,
          }}
        >
          {(props: any) => (
            <div className="flex flex-col items-center">
              <Container {...props} />
            </div>
          )}
        </Demo>
      );
    }}
  />
);

export default ContainerPage;
