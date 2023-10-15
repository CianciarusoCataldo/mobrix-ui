import {
  BuilderComponent,
  ClosableComponent,
  ComponentWithChildren,
  MoBrixUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Modal component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Modal
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type ModalProps = ComponentWithChildren<BuilderComponent> & ClosableComponent & {
  /** A custom className applied on the Modal overlay container */
  overlayClassName?: string;

  /** if `true`, and if `unstyled`===`false`, the modal can be closed by clicking outside it */
  closeOutside?: boolean;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Modal component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Modal
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type ModalComponent = MoBrixUiComponent<ModalProps>;
