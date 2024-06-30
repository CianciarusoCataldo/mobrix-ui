import {
  BuilderComponent,
  ComponentWithChildren,
  MbxUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Popup component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Popup
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type PopupProps = ComponentWithChildren<
  BuilderComponent | BuilderComponent[]
>;

export type PopupComponent = MbxUiComponent<PopupProps>;
