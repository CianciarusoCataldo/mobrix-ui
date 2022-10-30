import { DEMO_COMMON_PROPS } from "constants/demo-props";

import {
  BooleanProp,
  Demo,
  NumberProp,
  SelectProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { Rater } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";

const RaterPage = () => (
  <ComponentPage
    name="Rater"
    render={(_, componentLabel) => (
      <Demo
        label={componentLabel}
        props={{
          label: StringProp("label"),
          max: NumberProp(6),
          value: NumberProp(2),
          vertical: BooleanProp(false),
          readonly: BooleanProp(false),
          type: SelectProp({
            star: "star",
            circle: "circle",
          }),
          ...DEMO_COMMON_PROPS,
        }}
        rows={[
          ["value", "max", "type", "vertical"],
          ["readonly", "label", "className", "dark"],
          ["shadow", "unstyled", "hide"],
        ]}
      >
        {(props: any) => (
          <div className="flex flex-col items-center">
            <Rater {...props} />
          </div>
        )}
      </Demo>
    )}
  />
);

export default RaterPage;
