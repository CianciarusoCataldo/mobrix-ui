import {
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} generic Dropdown element
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Dropdown
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type DropdownGenericElement = DropdownStandardElement | string;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} standard Dropdown element
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Dropdown
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type DropdownStandardElement = {
  name: string | JSX.Element;
  icon?: JSX.Element;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} Dropdown component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Dropdown
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type DropdownProps = ComponentWithValue<number> &
  ComponentWithCallback<number> & {
    /** Dropdown content elements */
    content?: DropdownGenericElement[];

    /** Show/hide arrow icon near selected element */
    hideArrow?: boolean;
  };

export type DropdownComponent = MoBrixUiComponent<DropdownProps>;
