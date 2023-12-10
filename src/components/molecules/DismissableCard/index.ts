import "./styles.css";

import { DismissableCardComponent } from "../../../types";

import { buildMobrixUiReactiveComponent } from "../../../tools";

import dismissableCardInternalComponent from "./component";

const DismissableCard: DismissableCardComponent = ({
  onClose,
  noBottomDivider,
  noDividers,
  noTopDivider,
  header,
  body,
  footer,
  hide,
  children,
  alwaysVisible,
  additionalProps,
  ...commonProps
}) =>
  buildMobrixUiReactiveComponent({
    name: "dismissable-card",
    inputValue: hide,
    defaultValue: false,
    Component: ({ value, setValue }) =>
      dismissableCardInternalComponent({
        value,
        setValue,
        noBottomDivider,
        noDividers,
        noTopDivider,
        header,
        body,
        footer,
        dark: commonProps.dark,
        alwaysVisible,
        onClose
      }),
    additionalProps,
    props: (value, setValue) => ({
      commonProps: { ...commonProps, hide: alwaysVisible ? hide : value },
    }),
  });

export default DismissableCard;
