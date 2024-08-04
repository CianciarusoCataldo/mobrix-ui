import { ComponentWithCallback, MbxUiComponent } from "../../global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} FileChooser component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/FileChooser
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 * */
export type FileChooserProps = {
  /** File name position (hidden when no file is actually selected */
  namePosition?: "top" | "bottom" | "left" | "right";

  /** Hide/show filename, when a file is selected */
  hideFileName?: boolean;

  /** FileChooser button content. If not set, a predefined label will be used */
  children?: JSX.Element | string;

  /** Callback triggered when a file is selected by the user. It accept a single `File` type argument */
  onChange?: (file: File) => void;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} FileChooser component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/FileChooser
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type FileChooserComponent = MbxUiComponent<FileChooserProps>;
