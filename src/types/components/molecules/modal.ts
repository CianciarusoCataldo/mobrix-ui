import {
  BuilderComponent,
  ClosableComponent,
  ComponentWithChildren,
  MbxUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Modal component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Modal
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type ModalProps = ComponentWithChildren<BuilderComponent> &
  ClosableComponent;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Modal component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Modal
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type ModalComponent = MbxUiComponent<ModalProps>;
