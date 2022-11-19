import "./styles.css";

import { buildComponent } from "../../../utils";
import { PopupComponent } from "./types";

import popupComponent from "./component";

/**
 * A Popup container, showed upon every other component, overlayed.
 *
 * @since 2.0.0
 *
 * @param children popup content
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Table usage</caption>
 *
 * import { render } from "react-dom";
 * import { Popup } from 'mobrix-ui';
 *
 * render(<Popup hide={false}><span>Popup content</span></Popup>, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Table
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Popup: PopupComponent = ({ children, className = "", ...commonProps }) =>
  buildComponent({
    name: "mobrix-ui-popup",
    commonProps,
    Component: popupComponent({ className, children }),
  });

export default Popup;
