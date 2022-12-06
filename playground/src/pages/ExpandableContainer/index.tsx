import {
  BooleanProp,
  HiddenProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { ExpandableContainer } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { demoRows, demoProps } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";

const ExpandableContainerPage = () => (
  <ComponentPage
    name="ExpandableContainer"
    translations
    render={(t, componentLabel) => {
      const childrenText = t("props_children");

      return (
        <DemoComponent
          label={componentLabel}
          props={{
            children: StringProp(childrenText),
            compact: BooleanProp(true),
            expanded: HiddenProp(<div>Expanded area</div>),
            ...demoProps,
          }}
          rows={[["children", "compact", "expanded"], ...demoRows]}
        >
          {ExpandableContainer}
        </DemoComponent>
      );
    }}
  />
);

export default ExpandableContainerPage;
