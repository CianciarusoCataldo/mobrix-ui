import {
  BooleanProp,
  ColorProp,
  NumberProp,
} from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";
import { DEMO_COMMON_PROPS } from "constants/demo-props";
import { Slider } from "mobrix-ui-preview";

const SliderPage = () => (
  <ComponentPage
    name="Slider"
    render={(t, label) => {
      return (
        <DemoComponent
          label={label}
          props={{
            value: NumberProp(25),
            min: NumberProp(0),
            max: NumberProp(50),
            "Custom thumb": BooleanProp(false),
            thumbColor: ColorProp(),
            ...DEMO_COMMON_PROPS,
          }}
          parseProps={(props, setProps) => {
            let newProps = { ...props };

            delete newProps["Custom thumb"];
            delete newProps["thumbColor"];

            if (props["Custom thumb"]) {
              newProps["thumbColor"] = props["thumbColor"];
            }

            return newProps;
          }}
          rows={[
            ["value", "min", "max"],
            ["Custom thumb", "thumbColor"],
            ["dark", "shadow"],
            ["className", "hide", "unstyled"],
          ]}
          children={Slider}
        />
      );
    }}
  />
);

export default SliderPage;
