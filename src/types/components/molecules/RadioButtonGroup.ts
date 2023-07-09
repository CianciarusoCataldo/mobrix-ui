import {
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} RadioButtonGroup single element
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/RadioButtonGroup
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type RadioElement = {
  /** Radio button text */
  text?: string;

  /** Radio button custom component */
  component?: JSX.Element;

  /** Radio button text position */
  textPosition?: "top" | "bottom" | "left" | "right";
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} RadioButtonGroup props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/RadioButtonGroup
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type RadioButtonGroupProps = ComponentWithCallback<number> &
  ComponentWithValue<number> & {
    /** Radio elements array. Every element UI can be driven with attributes.
     * A radio element can contain 3 fields:
     * - `component`: custom component rendered before radio button
     * - `text`: custom radio text showed near the radio button
     * - `textPosition`: custom text position
     *    * */
    buttons?: RadioElement[];

    /** Classname applied on every radio element */
    elementClassName?: string;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} RadioButtonGroup component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/RadioButtonGroup
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type RadioButtonGroupComponent =
  MoBrixUiComponent<RadioButtonGroupProps>;
