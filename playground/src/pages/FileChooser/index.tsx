import {
  BooleanProp,
  HiddenProp,
  SelectProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { FileChooser } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { demoRows, demoProps } from "constants/demo-props";
import DemoComponent from "components/DemoComponent";

const FileChooserPage = () => (
  <ComponentPage
    name="FileChooser"
    translations
    render={(t, componentLabel) => (
      <DemoComponent
        label={componentLabel}
        props={{
          placeholder: StringProp("placeholder"),
          onChange: HiddenProp((f: File) => {
            console.log(f);
          }),
          ...demoProps,
          hideFileName: BooleanProp(false),
          namePosition: SelectProp({
            right: "right",
            bottom: "bottom",
            left: "left",
            top: "top",
          }),
        }}
        rows={[["hideFileName", "namePosition"], ...demoRows]}
      >
        {FileChooser}
      </DemoComponent>
    )}
  />
);

export default FileChooserPage;
