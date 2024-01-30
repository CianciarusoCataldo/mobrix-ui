import "./styles.css";

import { FormFieldComponent } from "../../../types";

import FormFieldInternalComponent from "./component";
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
const FormField: FormFieldComponent = ({
  value: inputValue,
  type,
  onChange,
  placeholder,
  required,
  validate,
  header,
  className,
  headerProps,
  errorLabel,
  ...sharedProps
}) => {
  return buildMbxReactiveComponent(sharedProps, (props) => ({
    name: "form-field",
    commonProps: { ...props, shadow: false },
    Component: ({ value, setValue }) =>
      FormFieldInternalComponent({
        value,
        setValue,
        type,
        onChange,
        placeholder,
        required,
        validate,
        header,
        className,
        errorLabel,
        ...props,
      }),
    inputValue,
    defaultValue: null,
  }));
};

export default FormField;
