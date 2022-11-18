import {
  HiddenProp,
  NumberProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";
import { DEMO_COMMON_PROPS } from "constants/demo-props";
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
        ...DEMO_COMMON_PROPS,
      }}
      children={RadioButtonGroup}
    />
  </ComponentPage>
);

export default RadioButtonsPage;
