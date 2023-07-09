import "./styles.css";

import { ExpandableContainerComponent } from "../../../types/components/molecules";

import { buildMobrixUiReactiveComponent } from "../../../utils";

import expandableContainerComponent from "./component";

/**
 * An exapandable container, to hide/show some content on demand.
 *
 * @since 1.0.0
 *
 * @param wrapper component type. The Container component can wrap a content inside different components (by now, )
 * @param children content to render inside Container (always, also when it is not expanded)
 * @param expanded Extra content showed only when container is expanded (`compact` === `true`)
 * @param {boolean} compact if true, the full container is showed (if false, the expanded area is hidden)
 * @param {(isCompact:boolean)=>void} onChange callback triggered when expanded content is showed/hidden
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
  wrapper,
  onChange,
  ...commonProps
}) => {
  return buildMobrixUiReactiveComponent({
    name: "expandable-container",
    defaultValue: false,
    commonProps,
    wrapper,
    inputValue: startCompact,
    props: (compact, setCompact) => ({
      Component: expandableContainerComponent({
        value: compact,
        setValue: setCompact,
        expanded,
        children,
        onChange,
        ...commonProps,
      }),
    }),
  });
};

export default ExpandableContainer;
