import Elem0 from "./elem0.png";
import Elem1 from "./elem1.png";
import Elem2 from "./elem2.png";

import { demoRows, demoProps } from "constants/demo-props";

import { NumberProp } from "@cianciarusocataldo/demo-ui";

import { Carousel } from "mobrix-ui-preview";
import { ComponentPage } from "../../components/ComponentPage";
import DemoComponent from "components/DemoComponent";

const CarouselPage = () => (
  <ComponentPage
    name="Carousel"
    render={(_, componentLabel) => (
      <DemoComponent
        label={componentLabel}
        props={{
          value: NumberProp(0),
          ...demoProps,
        }}
        rows={[["value", "className"], ...demoRows]}
        parseProps={(props) => ({
          ...props,
          elements: [
            <img alt="" src={Elem0} width="250px" height="250px" />,
            <img alt="" src={Elem1} width="250px" height="250px" />,
            <img alt="" src={Elem2} width="250px" height="250px" />,
          ],
        })}
      >
        {Carousel}
      </DemoComponent>
    )}
  />
);

export default CarouselPage;
