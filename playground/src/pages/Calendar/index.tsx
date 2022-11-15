import { BooleanProp, Demo, NumberProp } from "@cianciarusocataldo/demo-ui";

import { Calendar } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { DEMO_COMMON_PROPS } from "constants/demo-props";

const CalendarPage = () => (
  <ComponentPage
    translations
    name="Calendar"
    render={(t, componentLabel) => (
      <Demo
        label={componentLabel}
        startColor="#C3BBBB"
        props={{
          month: NumberProp(0),
          year: NumberProp(0),
          "Start month": BooleanProp(false),
          "Start year": BooleanProp(false),
          "Custom days": BooleanProp(false),
          "Custom months": BooleanProp(false),
          hideArrows: BooleanProp(false),
          fromToday: BooleanProp(true),
          ...DEMO_COMMON_PROPS,
        }}
        rows={[
          ["fromToday", "Start year", "year"],
          ["Start month", "month"],
          ["Custom days", "Custom months", "hideArrows"],
          ["className", "shadow"],
          ["dark", "hide", "unstyled"],
        ]}
      >
        {(props: any) => {
          let newProps = { ...props };

          delete newProps["Custom days"];
          delete newProps["Custom months"];
          delete newProps["Start month"];
          delete newProps["Start year"];
          delete newProps["year"];
          delete newProps["month"];

          newProps.value = {};
          newProps.startMonth = props["Start month"] ? props.month : undefined;
          newProps.startYear = props["Start year"] ? props.year : undefined;

          if (props["Custom days"]) {
            newProps.days = t("days").split("-");
          }

          if (props["Custom months"]) {
            newProps.months = t("months").split("-");
          }

          return (
            <div className="flex flex-col items-center">
              <Calendar
                {...newProps}
                value={{ year: 2023, month: 2, day: 4 }}
              />
            </div>
          );
        }}
      </Demo>
    )}
  />
);

export default CalendarPage;
