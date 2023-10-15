import {
  ComponentWithCallback,
  MoBrixUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Form Field component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/FormField
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type FormFieldProps<T=any> = ComponentWithCallback<T> & {
  /** Text showed above the field */
  header?: string;

  /**
   * The field type. It determines the UI component to be used to render it (default value `text`):
   *
   * allowed types are:
   * - `boolean` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CheckBox CheckBox})
   * - `numeric` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Counter Counter})
   * - `text` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Input Input})
   * - `radio` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/RadioButton RadioButton})
   * - `checkbox` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CheckBox CheckBox})
   * - `toggle` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Toggle Toggle})
   * - `rater` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Rater Rater})
   * - `slider` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Slider Slider})
   * - `input` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Input Input})
   * - `counter` (rendered as a {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Counter Counter})
   */
  type?:
    | "boolean"
    | "text"
    | "numeric"
    | "radio"
    | "checkbox"
    | "toggle"
    | "rater"
    | "slider"
    | "input"
    | "counter";

  /** Placeholder value showed when the input field is empty */
  placeholder?: string;

  /** If `true`, the submit button will be disabled when this field is empty */
  required?: boolean;

  /** Custom validation function called on submit. I */
  validate?: (fieldValue: T) => boolean;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Form Field component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/FormField
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type FormFieldComponent = MoBrixUiComponent<FormFieldProps>;
