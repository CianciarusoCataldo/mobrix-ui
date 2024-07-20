import { BooleanProp } from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";
import { demoRows, demoProps } from "constants/demo-props";
import { RadioButton } from "mobrix-ui-preview";

const RadioButtonsPage = () => (
  <ComponentPage name="RadioButton">
    <DemoComponent
      props={{
        value: BooleanProp(false),
        deselectable: BooleanProp(true),
        ...demoProps,
        active: BooleanProp(true),
      }}
      rows={[["value", "deselectable"], ...demoRows]}
      children={RadioButton}
    />
  </ComponentPage>
);

export default RadioButtonsPage;
