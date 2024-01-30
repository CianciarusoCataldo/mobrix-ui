import "./styles.css";

import { CodeBoxComponent } from "../../../types";

import { buildMobrixUiStandardComponent } from "../../../tools";

import codeboxComponent from "./component";
import { buildMbxStandardComponent } from "../../../tools/utils";

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
const CodeBox: CodeBoxComponent = ({
  value,
  highlight,
  environment,
  noCopyButton,
  additionalProps,
  ...commonProps
}) =>
  buildMbxStandardComponent(commonProps, (props) => ({
    name: "codebox",
    additionalProps,
    commonProps: props,
    Component: codeboxComponent({
      highlight,
      environment,
      value,
      noCopyButton,
      ...props,
    }),
  }));

export default CodeBox;
