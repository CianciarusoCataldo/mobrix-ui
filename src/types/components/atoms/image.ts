import { MbxUiComponent } from "../../global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Image component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/IconButton
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 * */
export type ImageProps = {
  /** Image {@link https://www.w3schools.com/tags/att_img_src.asp src attribute} */
  src: string;

  /** Image {@link https://www.w3schools.com/tags/att_img_width.asp width attribute} */
  width?: number;

  /** Image {@link https://www.w3schools.com/tags/att_img_height.asp height attribute} */
  height?: number;

  /** Image {@link https://www.w3schools.com/tags/att_img_alt.asp alt attribute} */
  alt?: string;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Image component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Image
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type ImageComponent = MbxUiComponent<ImageProps>;
