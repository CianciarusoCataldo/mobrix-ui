import "./styles.css";

import { buildMobrixUiStandardComponent } from "../../../utils";
import { PopupComponent } from "./types";

import popupComponent from "./component";

/**
 * A Popup container, showed upon every other component, overlayed.
 *
 * @since 2.0.0
 *
 * @param children popup content
 * @param {string} className `common MoBrix-ui prop` - custom className
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component, enabling or not MoBrix-ui custom styles
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component
 * @param {boolean} animated `common MoBrix-ui prop` enable/disable component animations
 * @param {string} key `common MoBrix-ui prop` custom component React key (the standard {@link https://reactjs.org/docs/lists-and-keys.html key parameter})
 * @param {boolean} a11y `common MoBrix-ui prop` enable/disable accessibility features
 * @param {boolean} a11yDark `common MoBrix-ui prop` if the `a11y` parameter is `true`, override standard focus color style with/without dark mode (normally, the color changes accordingly to the `dark` parameter)
 * @param {string} a11yLabel `common MoBrix-ui prop` if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label aria-label}
 *
 * @example <caption>Example Popup usage</caption>
 *
 * import { render } from "react-dom";
 * import { Popup } from 'mobrix-ui';
 *
 * render(<Popup hide={false}><span>Popup content</span></Popup>, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Popup
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Popup: PopupComponent = ({ children, className = "", ...commonProps }) =>
  buildMobrixUiStandardComponent({
    name: "mobrix-ui-popup",
    commonProps,
    Component: popupComponent({ className, children }),
  });

export default Popup;
