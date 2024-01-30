import "./styles.css";

import { TabViewerComponent } from "../../../types";

import tabViewerComponent from "./component";
import { buildMbxReactiveComponent } from "../../../tools";

/**
 * MBX_DESCRIPTION
 *
 * MBX_PROPS
 *
 * @example MBX_EXAMPLE
 *
 * @since MBX_SINCE
 *
 * @author MBX_AUTHOR
 *
 * @copyright MBX_COPYRIGHT
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
