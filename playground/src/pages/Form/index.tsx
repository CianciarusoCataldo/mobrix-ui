import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { DEMO_COMMON_PROPS } from "constants/demo-props";

import { Form } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";

const FormPage = () => (
  <ComponentPage
    name="Form"
    translations
    render={(t, componentLabel) => {
      let props: Record<string, any> = { ...DEMO_COMMON_PROPS };
      ["title", "children", "buttonContent"].forEach(
        (el) => (props[el] = StringProp(t("props", { context: el })))
      );

      props["fieldClassName"] = StringProp("");

      return (
        <Demo
          label={componentLabel}
          startColor="#A19B9B"
          props={props}
          rows={[
            ["title", "buttonContent"],
            ["children", "fieldClassName"],
            ["className", "dark", "shadow"],
            ["unstyled", "hide"],
          ]}
        >
          {(props: any) => (
            <div className="flex flex-col items-center justify-center">
              <Form
                {...props}
                fields={{
                  field1: {
                    placeholder: "placeholder",
                    header: t("props_field", { context: "text" }),
                  },
                  field2: {
                    placeholder: "placeholder",
                    type: "boolean",
                    header: t("props_field", { context: "boolean" }),
                  },
                  field3: {
                    placeholder: "placeholder",
                    type: "numeric",
                    header: t("props_field", { context: "numeric" }),
                  },
                }}
                onClick={(values: any) => console.log(values)}
              />
            </div>
          )}
        </Demo>
      );
    }}
  />
);

export default FormPage;
