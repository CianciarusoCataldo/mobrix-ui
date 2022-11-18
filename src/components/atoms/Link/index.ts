import "./styles.css";

import { LinkComponent } from "./types";

import { buildComponent } from "../../../utils";

/**
 * A re-defined `<a>` component, designed to be better used with links
 *
 * @since 1.0.0
 *
 * @param {string} to Link url
 * @param {boolean} newTab if true, the link will be opened in a new tab
 * @param {string} children Link text to click
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Link usage</caption>
 * import { render } from "react-dom";
 * import { Link } from 'mobrix-ui';
 *
 * render(<Link to="https://github.com/CianciarusoCataldo/mobrix-ui" newTab />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Link
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Link: LinkComponent = ({ to, children, newTab, ...commonProps }) =>
  buildComponent({
    name: "mobrix-ui-link",
    Component: children,
    commonProps,
    additionalProps: {
      href: to,
      target: newTab ? "_blank" : undefined,
    },
    wrapper: "a",
  });

export default Link;
