import {
  BuilderComponent,
  MbxSharedProps,
  ComponentWithCallback,
  ComponentWithValue,
  MbxUiComponent,
} from "../../global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Form Field component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/FormField
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type FormFieldProps<T = any> = ComponentWithValue &
  ComponentWithCallback<T> & {
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
      | "inp"
      | "counter";

    /** Placeholder value showed when the input field is empty */
    placeholder?: string;

    /** If `true`, the submit button will be disabled when this field is empty */
    required?: boolean;

    /** Custom validation function called on submit. I */
    validate?: (fieldValue: T) => boolean;

    /** Custom classname applied on every header element */
    headerClassName?: string;

    /** Custom props applied on every header element (including MoBrix-ui shared props) */
    headerProps?: Record<string, any> & MbxSharedProps;

    /** Custom error box content, displayed when FormField is in error state */
    errorLabel?: BuilderComponent;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Form Field component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/FormField
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type FormFieldComponent = MbxUiComponent<FormFieldProps>;
