import { FacebookButtons } from "mobrix-ui-preview";
import {
  BooleanProp,
  NumberProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "components/ComponentPage";
import { demoRows, demoProps } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";
import { FacebookButtonsProps } from "mobrix-ui-preview/components/atoms/FacebookButtons/types";

const FacebookButtonsPage = () => (
  <ComponentPage
    name="FacebookButtons"
    render={(t, componentLabel) => {
      return (
        <DemoComponent<FacebookButtonsProps>
          label={componentLabel}
          props={{
            pageId: StringProp("facebook"),
            "With custom width": BooleanProp(false),
            width: NumberProp(180),
            share: BooleanProp(true),
            small: BooleanProp(false),
            ...demoProps,
          }}
          rows={[
            ["pageId", "share", "small"],
            ["With custom width", "width"],
            ...demoRows,
          ]}
          parseProps={(props) => {
            let newProps = { ...props };

            delete newProps["With custom width"];

            if (!props["With custom width"]) {
              newProps["width"] = undefined;
            }
            return newProps;
          }}
        >
          {FacebookButtons}
        </DemoComponent>
      );
    }}
  />
);

export default FacebookButtonsPage;
