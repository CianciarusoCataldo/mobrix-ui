import {
  ClickableComponent,
  ComponentWithChildren,
  MoBrixUiComponent,
} from "../../../utils/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Form component field
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Form
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export interface FormField {
  header?: string;
  type?: "boolean" | "text" | "numeric";
  placeholder?: string;
}

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Form component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Form
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type FormProps = ComponentWithChildren<JSX.Element> &
  ClickableComponent<(values: Record<string, any>) => void> & {
    /** Form title */
    title?: string;

    /** Form fields array */
    fields?: Record<string, FormField>;

    /** Custom submit button label */
    buttonContent?: JSX.Element | string;

    /** Custom className applied on every single field component */
    fieldClassName?: string;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Form component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Form
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type FormComponent = MoBrixUiComponent<FormProps>;
