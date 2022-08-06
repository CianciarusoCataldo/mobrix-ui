import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { DEMO_COMMON_PROPS } from "constants/demo-props";

import { Form } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";

const FormPage = () => (
  <ComponentPage
    name="Form"
    translations
    render={(t, componentLabel) => {
      const fieldText = t("props_field", { index: "<INDEX>" });

      return (
        <Demo
          label={componentLabel}
          startColor="#A19B9B"
          props={{
            title: StringProp("title"),
            submitLabel: StringProp("submit label"),
            label: StringProp("label"),
            ...DEMO_COMMON_PROPS,
          }}
        >
          {(props: any) => (
            <div className="flex flex-col items-center">
              <Form
                {...props}
                fields={{
                  field1: {
                    header: fieldText.replace("<INDEX>", "1"),
                  },
                  field2: {
                    type: "boolean",
                    header: fieldText.replace("<INDEX>", "2"),
                  },
                  field3: {
                    type: "numeric",
                    header: fieldText.replace("<INDEX>", "3"),
                  },
                }}
                onSubmit={(values: any) => console.log(values)}
              />
            </div>
          )}
        </Demo>
      );
    }}
  />
);

export default FormPage;
