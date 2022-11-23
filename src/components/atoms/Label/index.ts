import "./styles.css";

import { LabelComponent } from "./types";

import { buildMobrixUiStandardComponent } from "../../../utils";

/**
 * A text wrapper, with many options to customize its content
 *
 * @since 1.0.0
 *
 * @param {string | string[]} children text content to show (string arrays are accepted)
 * @param {string} className `common MoBrix-ui prop` - custom className
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component, enabling or not MoBrix-ui custom styles
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component
 * @param {boolean} animated `common MoBrix-ui prop` enable/disable component animations
 * @param {boolean} key `common MoBrix-ui prop` enable/disable component animations
 * @param {boolean} a11y `common MoBrix-ui prop` enable/disable accessibility features
 * @param {boolean} a11yDark `common MoBrix-ui prop` if the `a11y` parameter is `true`, override standard focus color style with/without dark mode (normally, the color changes accordingly to the `dark` parameter)
 * @param {string} a11yLabel `common MoBrix-ui prop` if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label aria-label}
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
  buildMobrixUiStandardComponent({
    name: "mobrix-ui-label",
    Component: children,
    wrapper: "p",
    commonProps,
  });

export default Label;
