import "./styles.css";

import { LabelComponent } from "./types";

import { buildComponent } from "../../../utils";

/**
 * A text wrapper, with many options to customize its content
 *
 * @since 1.0.0
 *
 * @param {string | string[]} children text content to show (string arrays are accepted)
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Label usage</caption>
 * import { render } from "react-dom";
 * import { Label } from 'mobrix-ui';
 *
 * render(<Label value="example text" />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Label
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Label: LabelComponent = ({ children, ...commonProps }) =>
  buildComponent({
    name: "mobrix-ui-label",
    Component: children,
    wrapper: "p",
    commonProps,
  });

export default Label;
