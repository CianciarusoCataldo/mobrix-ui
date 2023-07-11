import {
  ClickableComponent,
  ComponentWithChildren,
  MoBrixUiComponent,
} from "../..";

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
  /** Text showed above the field itself */
  header?: string;

  /**
   * The field type (will determine a specific type when returned, and also the UI component associated)
   *
   * allowed types are:
   * `boolean` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CheckBox CheckBox})
   * `numeric` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Counter Counter})
   * `text` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Input Input})
   */
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

    /**
     * Form fields array. Every field must be an object with optionally 2 properties:
     *     - `header` - the text showed upon the field component)
     *     - `type` - the field type (will determine a specific type when returned, and also the UI component associated)
     *
     * allowed types are:
     *     - `boolean` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CheckBox})
     *     - `numeric` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Counter})
     *     - `text` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Input})
     *
     * A field object can be empty, in this case default values will be used (`input` type with empty header)
     */
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
