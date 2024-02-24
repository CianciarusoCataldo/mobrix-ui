import {
  BooleanProp,
  SelectProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { demoRows, demoProps } from "constants/demo-props";

import { CodeBox } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";

const CodeBoxPage = () => (
  <ComponentPage
    name="CodeBox"
    translations
    render={(t, componentLabel) => {
      const terminalText = t("props_environment", { context: "default" });

      return (
        <DemoComponent
          label={componentLabel}
          props={{
            value: StringProp("npm i mobrix-ui"),
            highlight: BooleanProp(true),
            copyButton: BooleanProp(true),
            environment: SelectProp({
              [terminalText]: "terminal",
              Javascript: "javascript",
              Python: "python",
            }),
            ...demoProps,
          }}
          rows={[
            ["value", "highlight", "copyButton", "environment"],
            ...demoRows,
          ]}
        >
          {CodeBox}
        </DemoComponent>
      );
    }}
  />
);

export default CodeBoxPage;
