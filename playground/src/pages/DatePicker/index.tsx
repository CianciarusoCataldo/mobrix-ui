import { BooleanProp, Demo, NumberProp } from "@cianciarusocataldo/demo-ui";

import { DatePicker } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { DEMO_COMMON_PROPS } from "constants/demo-props";

const CalendarPage = () => (
  <ComponentPage
    translations
    name="DatePicker"
    render={(t, componentLabel) => (
      <Demo
        label={componentLabel}
        startColor="#C3BBBB"
        props={{
          month: NumberProp(0),
          year: NumberProp(0),
          "Custom month": BooleanProp(false),
          "Custom year": BooleanProp(false),
          "Custom days": BooleanProp(false),
          "Custom months": BooleanProp(false),
          hideArrows: BooleanProp(false),
          dayLabel: BooleanProp(true),
          fromToday: BooleanProp(true),
          ...DEMO_COMMON_PROPS,
        }}
        rows={[
          ["Custom year", "year"],
          ["Custom month", "month"],
          ["Custom days", "Custom months", "fromToday"],
          ["className", "shadow"],
          ["dark", "hide", "unstyled"],
        ]}
      >
        {(props: any) => {
          let newProps = { ...props };

          delete newProps["Custom days"];
          delete newProps["Custom months"];
          delete newProps["Custom month"];
          delete newProps["Custom year"];
          delete newProps["year"];
          delete newProps["month"];

          newProps.value = {};
          newProps.value.month = props["Custom month"]
            ? props.month
            : undefined;
          newProps.value.year = props["Custom year"] ? props.year : undefined;

          if (props["Custom days"]) {
            newProps.days = t("days").split("-");
          }

          if (props["Custom months"]) {
            newProps.months = t("months").split("-");
          }

          return <DatePicker {...newProps} />;
        }}
      </Demo>
    )}
  />
);

export default CalendarPage;
