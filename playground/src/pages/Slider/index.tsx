import {
  BooleanProp,
  ColorProp,
  NumberProp,
} from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";
import { demoRows, demoProps } from "constants/demo-props";
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
            readOnly: BooleanProp(false),
            "Custom thumb": BooleanProp(false),
            thumbColor: ColorProp(),
            ...demoProps,
            active: BooleanProp(true),
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
            ["value", "readOnly"],
            ["min", "max"],
            ["Custom thumb", "thumbColor"],
            ...demoRows,
          ]}
          children={Slider}
        />
      );
    }}
  />
);

export default SliderPage;
