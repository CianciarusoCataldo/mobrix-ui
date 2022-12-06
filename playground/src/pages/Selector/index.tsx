import { HiddenProp, NumberProp } from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";
import { demoRows, demoProps } from "constants/demo-props";
import { Selector } from "mobrix-ui-preview";

const SelectorPage = () => (
  <ComponentPage
    name="Selector"
    render={(t, label) => {
      return (
        <DemoComponent
          label={label}
          props={{
            ...demoProps,
            value: NumberProp(0),
            elements: HiddenProp(["Element 1", "Element 2"]),
          }}
          rows={[["value"], ...demoRows]}
        >
          {Selector}
        </DemoComponent>
      );
    }}
  />
);

export default SelectorPage;
