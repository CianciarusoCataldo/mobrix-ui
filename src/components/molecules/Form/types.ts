import {
  BoxComponent,
  CommonProps,
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
export type FormProps = CommonProps &
  Omit<BoxComponent, "value" | "icon"> & {
    /** Form title */
    title?: string;

    /** Form fields array */
    fields?: Record<string, FormField>;

    /** Custom submit button label */
    submitLabel?: string;

    /** Callback on Form submit */
    onSubmit?: (values: Record<string, string | boolean | number>) => void;
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
