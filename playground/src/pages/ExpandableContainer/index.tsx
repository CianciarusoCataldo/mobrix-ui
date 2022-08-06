import {
  BooleanProp,
  Demo,
  HiddenProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { ExpandableContainer } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { DEMO_COMMON_PROPS } from "constants/demo-props";

const ExpandableContainerPage = () => (
  <ComponentPage
    name="ExpandableContainer"
    translations
    render={(t, componentLabel) => {
      const childrenText = t("props_children");

      return (
        <Demo
          label={componentLabel}
          props={{
            children: StringProp(childrenText),
            animated: BooleanProp(false),
            expanded: HiddenProp(<div>Expanded area</div>),
            ...DEMO_COMMON_PROPS,
          }}
        >
          {(props: any) => (
            <div className="flex flex-col items-center">
              <ExpandableContainer {...props} />
            </div>
          )}
        </Demo>
      );
    }}
  />
);

export default ExpandableContainerPage;
