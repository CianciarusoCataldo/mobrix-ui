import Elem0 from "./elem0.png";
import Elem1 from "./elem1.png";
import Elem2 from "./elem2.png";

import { DEMO_COMMON_PROPS } from "constants/demo-props";

import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { Carousel } from "mobrix-ui-preview";
import { ComponentPage } from "../../components/ComponentPage";

const CarouselPage = () => (
  <ComponentPage
    name="Carousel"
    render={(_, componentLabel) => (
      <Demo
        label={componentLabel}
        props={{
          label: StringProp("label"),
          ...DEMO_COMMON_PROPS,
        }}
      >
        {(props: any) => {
          return (
            <Carousel
              elements={[
                <img alt="" src={Elem0} width="250px" height="250px" />,
                <img alt="" src={Elem1} width="250px" height="250px" />,
                <img alt="" src={Elem2} width="250px" height="250px" />,
              ]}
              {...props}
            />
          );
        }}
      </Demo>
    )}
  />
);

export default CarouselPage;
