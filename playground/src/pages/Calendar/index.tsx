import {
  BooleanProp,
  Demo,
  NumberProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { Calendar } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { DEMO_COMMON_PROPS } from "constants/demo-props";

const CalendarPage = () => (
  <ComponentPage
    name="Calendar"
    render={(_, componentLabel) => (
      <Demo
        label={componentLabel}
        startColor="#C3BBBB"
        props={{
          day: NumberProp(0),
          month: NumberProp(0),
          year: NumberProp(0),
          "Custom day": BooleanProp(false),
          "Custom month": BooleanProp(false),
          "Custom year": BooleanProp(false),
          ...DEMO_COMMON_PROPS,
        }}
        rows={[
          ["Custom day", "day", "Custom month", "month"],
          ["Custom year", "year", "className"],
          ["shadow", "dark", "hide", "unstyled"],
        ]}
      >
        {(props: any) => {
          let newProps = { ...props };

          delete newProps["Custom day"];
          delete newProps["Custom month"];
          delete newProps["Custom year"];

          newProps.day = props["Custom day"] ? props.day : undefined;
          newProps.month = props["Custom month"] ? props.month : undefined;
          newProps.day = props["Custom year"] ? props.year : undefined;

          return <Calendar {...newProps} />;
        }}
      </Demo>
    )}
  />
);

export default CalendarPage;
