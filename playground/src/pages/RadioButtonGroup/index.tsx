import {
  HiddenProp,
  NumberProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";
import { demoRows, demoProps } from "constants/demo-props";
import { RadioButtonGroup } from "mobrix-ui-preview";

const RadioButtonsPage = () => (
  <ComponentPage name="RadioButtonGroup">
    <DemoComponent
      props={{
        value: NumberProp(-1),
        elementClassName: StringProp(""),
        buttons: HiddenProp([
          { text: "textPosition = left", textPosition: "left" },
          { text: "textPosition = top", textPosition: "top" },
          { text: "textPosition = right", textPosition: "right" },
          { text: "textPosition = bottom", textPosition: "bottom" },
        ]),
        ...demoProps,
      }}
      rows={[["value", "elementClassName"], ...demoRows]}
      children={RadioButtonGroup}
    />
  </ComponentPage>
);

export default RadioButtonsPage;
