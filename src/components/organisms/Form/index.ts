import "./styles.css";

import { FormComponent } from "../../../types";

import { buildMobrixUiStandardComponent } from "../../../tools";

import formComponent from "./component";
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
const Form: FormComponent = ({
  title,
  fields,
  onSubmit,
  submitLabel,
  children,
  fieldClassName,
  ...commonProps
}) =>
  buildMbxStandardComponent(commonProps, (props) => ({
    name: "form",
    Component: formComponent({
      title,
      fields,
      onSubmit,
      submitLabel,
      children,
      fieldClassName,
      ...props,
    }),
    commonProps: props,
  }));

export default Form;
