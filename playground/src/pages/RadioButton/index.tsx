import { BooleanProp } from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";
import { DEMO_COMMON_PROPS } from "constants/demo-props";
import { RadioButton } from "mobrix-ui-preview";

const RadioButtonsPage = () => (
  <ComponentPage name="RadioButton">
    <DemoComponent
      props={{ value: BooleanProp(false), ...DEMO_COMMON_PROPS }}
      children={RadioButton}
    />
  </ComponentPage>
);

export default RadioButtonsPage;
