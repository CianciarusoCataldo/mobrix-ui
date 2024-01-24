import {
  ComponentWithChildren,
  MoBrixUiComponent,
} from "../../../types/global";

import { FormFieldProps } from "./form-field";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Form component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Form
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type FormProps = ComponentWithChildren<JSX.Element> & {
  /** Form title */
  title?: string;

  /** Form fields object. Every key is the field unique ID, and will be used on submit when returning their values */
  fields?: Record<
    string,
    FormFieldProps & {
      /** Custom component rendered instead of the standard field (if `override` is set, all other parameters are not used) */
      override?: JSX.Element;
      /** Custom className applied on the field component */
      className?: string;
    }
  >;

  /**
   * Form fields object. Every key is the field unique ID, and will be used on submit when returning their values
   */
  fieldsMap?: string[][];

  /** Custom submit button label */
  submitLabel?: JSX.Element | string;

  /** Custom className applied on every single field component */
  fieldClassName?: string;

  validate?: (fieldValues: Record<string, any>) => Record<string, boolean>;

  onSubmit?: (values: Record<string, any>) => void;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Form component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Form
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type FormComponent = MoBrixUiComponent<FormProps>;
