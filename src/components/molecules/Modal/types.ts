import {
  BuilderComponent,
  ComponentWithChildren,
  MoBrixUiComponent,
} from "../../../utils/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Modal component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Modal
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ModalProps = ComponentWithChildren<BuilderComponent> & {
  /** Modal title */
  title?: string;

  /** Callback triggered when modal is closed */
  onClose?: () => void;

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
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ModalComponent = MoBrixUiComponent<ModalProps>;
