import {
  ComponentWithCallback,
  ComponentWithValue,
  MbxUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Selector component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Selector
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type SelectorProps = ComponentWithValue<number> &
  ComponentWithCallback<number> & {
    /** Selector options, every element must be a string */
    elements?: string[];

    /** ClassName applied on every option inside the selector */
    optionClassName?: string;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Selector component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Selector
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type SelectorComponent = MbxUiComponent<SelectorProps>;
