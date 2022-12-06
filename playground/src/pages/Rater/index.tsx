import { demoRows, demoProps } from "constants/demo-props";

import {
  BooleanProp,
  NumberProp,
  SelectProp,
} from "@cianciarusocataldo/demo-ui";

import { Rater } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";

const RaterPage = () => (
  <ComponentPage
    name="Rater"
    render={(_, componentLabel) => (
      <DemoComponent
        label={componentLabel}
        props={{
          max: NumberProp(6),
          value: NumberProp(2),
          vertical: BooleanProp(false),
          readonly: BooleanProp(false),
          type: SelectProp({
            star: "star",
            circle: "circle",
          }),
          ...demoProps,
        }}
        rows={[["value", "max", "type"], ["readonly", "vertical"], ...demoRows]}
      >
        {Rater}
      </DemoComponent>
    )}
  />
);

export default RaterPage;
