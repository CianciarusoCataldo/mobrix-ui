import { FacebookButtons } from "mobrix-ui-preview";
import {
  BooleanProp,
  Demo,
  NumberProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "components/ComponentPage";
import { DEMO_COMMON_PROPS } from "constants/demo-props";

const FacebookButtonsPage = () => (
  <ComponentPage
    name="FacebookButtons"
    render={(t, componentLabel) => {
      return (
        <Demo
          label={componentLabel}
          props={{
            pageId: StringProp("critelliTour80"),
            "With custom width": BooleanProp(false),
            width: NumberProp(180),
            share: BooleanProp(true),
            small: BooleanProp(false),
            ...DEMO_COMMON_PROPS,
          }}
          rows={[
            ["pageId", "share", "small"],
            ["With custom width", "width"],
            ["className", "dark"],
            ["shadow", "unstyled", "hide"],
          ]}
        >
          {(props: any) => {
            let newProps = { ...props };

            delete newProps["With custom width"];

            if (!props["With custom width"]) {
              newProps["width"] = undefined;
            }

            return (
              <div className="flex flex-col items-center">
                <FacebookButtons {...newProps} />
              </div>
            );
          }}
        </Demo>
      );
    }}
  />
);

export default FacebookButtonsPage;
