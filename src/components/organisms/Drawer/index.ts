import "./styles.css";

import { DrawerComponent } from "../../../types/components/organisms";

import { buildMobrixUiStandardComponent } from "../../../utils";

import drawerBuilder from "./builder";

/**
 * A modern drawer, easy to integrate and to customize.
 *
 * @since 1.0.0
 *
 * @param position drawer position (relative to the entire window). Possible values are `bottom`, `top`, `right`, `left`, `bottom-left`, `bottom-right`, `top-left` and `top-right`
 * @param {()=>void} onClose Callback triggered on Drawer close
 * @param {JSX.Element | JSX.Element[] | string| string[]} children Callback triggered on Drawer close
 * @param {string} className `common MoBrix-ui prop` - custom className
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component, enabling or not MoBrix-ui custom styles
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component
 * @param {boolean} animated `common MoBrix-ui prop` enable/disable component animations
 * @param {string} key `common MoBrix-ui prop` - custom component React key (the standard {@link https://reactjs.org/docs/lists-and-keys.html key parameter})
 * @param {boolean} a11y `common MoBrix-ui prop` - enable/disable accessibility features
 * @param {boolean} a11yDark `common MoBrix-ui prop` - if the `a11y` parameter is `true`, override standard focus color style with/without dark mode (normally, the color changes accordingly to the `dark` parameter)
 * @param {string} a11yLabel `common MoBrix-ui prop` - if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label aria-label}
 * @param {() => void} onFocus `common MoBrix-ui prop` - callback called when component is focused
 * @param {() => void} onFocusLost `common MoBrix-ui prop` - callback called when component focus is lost
 * @param {(keyEvent: any) => void} onKeyDown `common MoBrix-ui prop` - callback called when a key is pressed when inside the component
 *
 * @example <caption>Example Drawer usage</caption>
 * import { render } from "react-dom";
 * import { Drawer } from 'mobrix-ui';
 *
 * render(<Drawer children={<div>Drawer content</div>} position="top-left" />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Drawer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Drawer: DrawerComponent = (props) => {
  return buildMobrixUiStandardComponent({
    name: "drawer",
    ...drawerBuilder(props),
  });
};

export default Drawer;
