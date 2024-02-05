import {
  BooleanProp,
  Demo,
  SelectProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { demoProps } from "constants/demo-props";

import { FormField } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";

const FormPage = () => (
  <ComponentPage
    name="FormField"
    translations
    render={(t, componentLabel) => {
      let props: Record<string, any> = { ...demoProps };
      ["title", "children", "submitLabel"].forEach(
        (el) => (props[el] = StringProp(t("props", { context: el })))
      );

      props["fieldClassName"] = StringProp("");

      return (
        <Demo
          props={{
            type: SelectProp({
              text: "text",
              boolean: "boolean",
              numeric: "numeric",
              radio: "radio",
              checkbox: "checkbox",
              toggle: "toggle",
              rater: "rater",
              slider: "slider",
              input: "input",
              counter: "counter",
            }),
            value: StringProp(""),
            required: BooleanProp(true),
            header: StringProp("header"),
            errorLabel: StringProp(""),
            dark: BooleanProp(false),
            animated: BooleanProp(true),
            shadow: BooleanProp(true),
            className: StringProp(""),
          }}
          header="FormField"
          rows={[
            ["value"],
            ["type", "required", "header", "errorLabel"],
            ["dark", "animated", "shadow", "className"],
          ]}
          children={(props: any, setProps: any) => (
            <FormField
              animated
              onChange={(value) => console.log(value)}
              {...props}
            />
          )}
        />
      );
    }}
  />
);

export default FormPage;
