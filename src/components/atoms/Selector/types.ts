import {
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../../utils/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Selector component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Selector
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type SelectorProps = ComponentWithValue<number> &
  ComponentWithCallback<number> & {
    /** selector options, every element must be a string */
    elements?: string[];
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Selector component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Selector
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type SelectorComponent = MoBrixUiComponent<SelectorProps>;
