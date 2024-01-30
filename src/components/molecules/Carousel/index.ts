import "./styles.css";

import { CarouselComponent } from "../../../types";

import carouselComponent from "./component";
import { buildMbxReactiveComponent } from "../../../tools";

/**
 * MBX_DESCRIPTION
 *
 * MBX_PROPS
 *
 * @example MBX_EXAMPLE
 *
 * @since MBX_SINCE
 *
 * @author MBX_AUTHOR
 *
 * @copyright MBX_COPYRIGHT
 */
const Carousel: CarouselComponent = ({
  elements: actualElements,
  onChange,
  value,
  additionalProps,
  ...commonProps
}) => {
  return buildMbxReactiveComponent<number>(commonProps, (props) => ({
    name: "carousel",
    commonProps: props,
    defaultValue: 0,
    inputValue: value,
    additionalProps,
    Component: ({ value, setValue }) =>
      carouselComponent({
        value,
        setValue,
        onChange,
        elements: actualElements,
        ...props,
      }),
  }));
};

export default Carousel;
