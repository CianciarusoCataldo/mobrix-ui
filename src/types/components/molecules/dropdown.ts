import {
  BuilderComponent,
  MbxSharedProps,
  ComponentWithCallback,
  ComponentWithValue,
  MbxUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} Dropdown component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Dropdown
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type DropdownProps = ComponentWithValue<number> &
  ComponentWithCallback<number> & {
    /** Dropdown elements */
    elements?: BuilderComponent[];

    /** Show/hide arrow icon near selected element */
    hideArrow?: boolean;
  };

export type DropdownComponent = MbxUiComponent<DropdownProps>;
