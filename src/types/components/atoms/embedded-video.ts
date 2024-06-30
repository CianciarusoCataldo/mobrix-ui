import { ClickableComponent, MbxUiComponent } from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} EmbeddedVideo component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Button
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 * */
export type EmbeddedVideoProps = {
  /** external video url */
  url?: string;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Button component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Button
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type EmbeddedVideoComponent = MbxUiComponent<EmbeddedVideoProps>;
