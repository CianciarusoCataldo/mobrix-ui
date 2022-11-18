import "./styles.css";

import { ExpandableContainerComponent } from "./types";

import { withMobrixUiValue } from "../../../utils";

import expandableContainerComponent from "./component";

/**
 * An exapandable container, to hide/show some content on demand.
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
 * import { ExpandableContainer } from 'mobrix-ui';
 *
 * render(
 * <ExpandableContainer animated dark expanded={<p>Expanded area</p>}>
 * Example content
 * </ExpandableContainer>,
 * document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Container
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const ExpandableContainer: ExpandableContainerComponent = ({
  expanded,
  compact: startCompact,
  children,
  animated,
  wrapper,
  ...commonProps
}) => {
  return withMobrixUiValue({
    name: "mobrix-ui-expandable-container",
    defaultValue: false,
    commonProps,
    animated,
    wrapper,
    inputValue: startCompact,
    props: (compact, setCompact) =>
      expandableContainerComponent({
        value: compact,
        setValue: setCompact,
        expanded,
        children,
        ...commonProps,
      }),
  });
};

export default ExpandableContainer;
