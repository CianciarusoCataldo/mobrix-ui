import { BooleanProp } from "@cianciarusocataldo/demo-ui";

import { DatePicker } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { demoRows, demoProps } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";

const DatePickerPage = () => (
  <ComponentPage
    translations
    name="DatePicker"
    render={(t, componentLabel) => (
      <DemoComponent
        label={componentLabel}
        startColor="#C3BBBB"
        props={{
          hideArrows: BooleanProp(false),
          dayLabel: BooleanProp(true),
          fromToday: BooleanProp(true),
          ...demoProps,
        }}
        rows={[["fromToday", "hideArrows", "dayLabel"], ...demoRows]}
      >
        {DatePicker}
      </DemoComponent>
    )}
  />
);

export default DatePickerPage;
