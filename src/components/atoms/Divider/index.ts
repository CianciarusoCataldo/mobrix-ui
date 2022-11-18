import "./styles.css";

import { DividerComponent } from "./types";

import { buildComponent } from "../../../utils";

/**
 * A simple divider, useful to separate sections and paragraphs
 *
 * @since 1.0.0
 *
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Divider usage</caption>
 * import { render } from "react-dom";
 * import { Divider } from 'mobrix-ui';
 *
 * render(<Divider />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Divider
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Divider: DividerComponent = (props) =>
  buildComponent({
    name: "mobrix-ui-divider",
    commonProps: props,
  });

export default Divider;
