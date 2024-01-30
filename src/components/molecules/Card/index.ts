import "./styles.css";

import { CardComponent } from "../../../types";

import { buildMobrixUiStandardComponent } from "../../../tools";

import cardComponent from "./component";

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
const Card: CardComponent = ({
  header,
  body,
  footer,
  children,
  hide,
  noDividers,
  noBottomDivider,
  noTopDivider,
  additionalProps,
  ...commonProps
}) => {
  return buildMobrixUiStandardComponent({
    name: "card",
    Component: cardComponent({
      header,
      body,
      children,
      footer,
      dark: commonProps.dark,
      noDividers,
      noBottomDivider,
      noTopDivider,
    }),
    commonProps,
    additionalProps,
  });
};

export default Card;
