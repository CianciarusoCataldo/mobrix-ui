import { NumberProp, StringProp } from "@cianciarusocataldo/demo-ui";

import { demoRows, demoProps } from "constants/demo-props";

import { ComponentPage } from "components/ComponentPage";

import { Image } from "mobrix-ui-preview";
import DemoComponent from "components/DemoComponent";

const ImagePage = () => (
  <ComponentPage
    name="Image"
    render={(_, componentLabel) => (
      <DemoComponent
        label={componentLabel}
        startColor="#C3BBBB"
        props={{
          src: StringProp(
            "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
          ),
          width: NumberProp(250),
          height: NumberProp(180),
          alt: StringProp(""),
          ...demoProps,
        }}
        rows={[["src"], ["width", "height", "alt"], ...demoRows]}
      >
        {Image}
      </DemoComponent>
    )}
  />
);

export default ImagePage;
