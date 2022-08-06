import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
  MoBrixUiComponent,
} from "../../../utils/global";

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Dropdown component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Dropdown
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export interface DropdownElement {
  name: string | JSX.Element;
  icon?: JSX.Element;
}

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Dropdown component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Dropdown
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type DropdownProps = CommonProps &
  Omit<BoxComponent<number>, "icon"> &
  ComponentWithCallback<number> & {
    /** Dropdown content elements */
    content?: DropdownElement[];
  };

export type DropdownComponent = MoBrixUiComponent<DropdownProps>;
