import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { demoProps, demoRows } from "constants/demo-props";

import { Form } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";

const FormPage = () => (
  <ComponentPage
    name="Form"
    translations
    render={(t, componentLabel) => {
      let props: Record<string, any> = { ...demoProps };
      ["title", "children", "submitLabel"].forEach(
        (el) => (props[el] = StringProp(t("props", { context: el })))
      );

      props["fieldClassName"] = StringProp("");

      return (
        <Demo
          label={componentLabel}
          startColor="#A19B9B"
          props={props}
          rows={[
            ["title", "submitLabel"],
            ["children", "fieldClassName"],
            ...demoRows,
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
                  field4: {
                    placeholder: "",
                    type: "password",
                    header: t("props_field", { context: "password" }),
                  },
                  field5: {
                    placeholder: "placeholder",
                    type: "radio",
                    header: t("props_field", { context: "radio" }),
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
