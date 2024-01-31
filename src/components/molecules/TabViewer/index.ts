import "./styles.css";

import { TabViewerComponent } from "../../../types";

import tabViewerComponent from "./component";
import { buildMbxReactiveComponent } from "../../../tools";

/**
* 
*
* @param {{`label`: string; `content`: JSX.Element;}[]} tabs Tabs array. Every tab object contains 3 fields:
- `label`: tab label displayed on top
- `content`: tab content element
* @param {Record<string,any>} tabProps Custom props applied on every tab
* @param {Record<string,any>} tabSelectedProps Custom props applied on every selected tab
* @param {Record<string,any>} tabUnselectedProps Custom props applied on every unselected tab
* @param {Record<string,any>} tabViewProps Custom props applied on the tab view panel
* @param {Record<string,any>} tabClassName Custom props applied on every tab
* @param {Record<string,any>} tabSelectedClassName Custom props applied on every selected tab
* @param {Record<string,any>} tabUnselectedClassName Custom props applied on every unselected tab
* @param {Record<string,any>} tabViewClassName Custom props applied on the tab view panel
* @param {(newValue: number) => void} onChange Callback triggered when a tab is selected, giving its index as parameter
* @param {string} key - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - React key, the standard [key parameter](https://reactjs.org/docs/lists-and-keys.html)
* @param {string} className - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - custom className applied on main container
* @param {boolean} dark - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable dark mode
* @param {boolean} hide - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Hide/show component
* @param {string} id - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - [id parameter](https://www.w3schools.com/html/html_id.asp) (for styling/testing purpose, to easily find the component into the DOM)
* @param {boolean} shadow - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable shadow behind component
* @param {CSSProperties} style - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Css inline properties applied on main container
* @param {boolean} unstyled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons)
* @param {boolean} animated - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component animations
* @param {boolean} background - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component background
* @param {boolean} hover - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component hover standard styles
* @param {boolean} disabled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If true, disable the component. The effect may vary depending on the component type
* @param {Record<string, any>} additionalProps - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom additional properties, applied to the component
* 
*
* @example MBX_EXAMPLE
*
* @see https://cianciarusocataldo.github.io/mobrix-ui/molecules/TabViewer
* @see https://cianciarusocataldo.github.io/mobrix-ui/docs
*
* @since 
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
  additionalProps,
  tabProps,
  tabSelectedProps,
  tabUnselectedProps,
  tabViewProps,
  ...commonProps
}) =>
  buildMbxReactiveComponent(commonProps, (props) => ({
    commonProps: {
      ...props,
      shadow: false,
    },
    additionalProps,
    defaultValue: 0,
    inputValue: selected,
    name: "tab-viewer",
    Component: ({ value, setValue }) =>
      tabViewerComponent({
        onChange,
        setValue,
        tabClassName,
        tabSelectedClassName,
        tabUnselectedClassName,
        tabViewClassName,
        tabs,
        value: Number(value),
        ...props,
      }),
  }));

export default TabViewer;
