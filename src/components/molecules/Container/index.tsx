import "./styles.css";

import { ContainerComponent } from "./types";

import { buildComponent } from "../../../utils";
import classNames from "classnames";

/**
 * A simple but smart container, enhanced with modular-ui common props and animations (if enabled)
 *
 * @since 1.0.0
 *
 * @param wrapper component type. The Container component can wrap a content inside different components (by now, )
 * @param children content to render inside Container
 * @param animated if `true`, the Container will be showed with a fade-in effect
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Container usage</caption>
 * import { render } from "react-dom";
 * import { Container } from 'mobrix-ui';
 *
 * render(<Container animated dark> Example content </Container>, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Container
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Container: ContainerComponent = ({
  children,
  wrapper,
  animated,
  ...commonProps
}) =>
  buildComponent({
    name: "mobrix-ui-container",
    Component: children,
    commonProps: {
      ...commonProps,
      className: classNames(commonProps.className, {
        animated: animated && !commonProps.hide,
      }),
    },
    wrapper,
  });

export default Container;
