import "./styles.css";

import { TabViewerComponent } from "mobrix-ui-types";

import { buildMobrixUiReactiveComponent } from "mobrix-ui-tools";

import tabViewerComponent from "./component";

/**
 * A tabs manager, to let the user switch to different views by simply click on a different tab
 *
 * @since 2.1.0
 *
 * @param {Tab[]} tabs tabs array. When a tab is selected, its index (position into array) is passed to the `onChange` callback
 * @param {number} selected initially selected tab (as an array index, default to `0`)
 * @param {string} tabClassName custom className applied on every tab
 * @param {string} tabSelectedClassName custom className applied on selected tab
 * @param {string} tabUnselectedClassName custom className applied on every unselected tab
 * @param {string} tabViewClassName custom className applied on the tab view container (where the selected tab content is showed)
 * @param {()=>void} onChange callback triggered when a tab is clicked
 * @param {string} className `common MoBrix-ui prop` - custom className
 * @param {boolean} unstyled `common MoBrix-ui prop` - style/unstyle component, enabling or not MoBrix-ui custom styles
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - enable/disable shadow behind component
 * @param {boolean} animated `common MoBrix-ui prop` enable/disable component animations
 * @param {string} key `common MoBrix-ui prop` - custom component React key (the standard {@link https://reactjs.org/docs/lists-and-keys.html key parameter})
 * @param {boolean} a11y `common MoBrix-ui prop` - enable/disable accessibility features
 * @param {boolean} a11yDark `common MoBrix-ui prop` - if the `a11y` parameter is `true`, override standard focus color style with/without dark mode (normally, the color changes accordingly to the `dark` parameter)
 * @param {string} a11yLabel `common MoBrix-ui prop` - if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label aria-label}
 * @param {() => void} onFocus `common MoBrix-ui prop` - callback called when component is focused
 * @param {() => void} onFocusLost `common MoBrix-ui prop` - callback called when component focus is lost
 * @param {(keyEvent: any) => void} onKeyDown `common MoBrix-ui prop` - callback called when a key is pressed when inside the component
 *
 * @example <caption>Example TabViewer usage</caption>
 * import { render } from "react-dom";
 * import { TabViewer } from 'mobrix-ui';
 *
 * render(<TabViewer tabs={[
 * { label: 'Tab 1',
 *   content: (<div>Tab 1 content</div>)
 * },
 * {
 *   label: 'Tab 2',
 *   content: (<div>Tab 1 content</div>)
 * }
 * ]}/>, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/TabViewer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
const TabViewer: TabViewerComponent = ({
  onChange,
  selected,
  tabs,
  tabClassName,
  tabSelectedClassName,
  tabUnselectedClassName,
  tabViewClassName,
  ...commonProps
}) =>
  buildMobrixUiReactiveComponent({
    commonProps,
    defaultValue: 0,
    inputValue: selected,
    name: "tab-viewer",
    props: (value, setValue) => ({
      Component: tabViewerComponent({
        onChange,
        setValue,
        tabClassName,
        tabSelectedClassName,
        tabUnselectedClassName,
        tabViewClassName,
        tabs,
        value: Number(value),
        ...commonProps,
      }),
    }),
  });

export default TabViewer;
