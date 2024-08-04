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
export type FileChooserProps = ComponentWithCallback<File> & {
  namePosition?: "top" | "bottom" | "left" | "right";
  hideFileName?: boolean;
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
