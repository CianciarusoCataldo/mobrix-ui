import "./styles.css";

import { ReviewComponent } from "../../../types";

import { buildMbxStandardComponent } from "../../../tools";

import reviewComponent from "./component";

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
const Review: ReviewComponent = ({
  user,
  description,
  rate,
  max,
  icon,
  url,
  logo,
  rateType,
  additionalProps,
  ...commonProps
}) =>
  buildMbxStandardComponent(commonProps, (props) => ({
    name: "review",
    commonProps: props,
    additionalProps,
    Component: reviewComponent({
      user,
      description,
      rate,
      max,
      icon,
      url,
      logo,
      rateType,
      ...props,
    }),
  }));

export default Review;
