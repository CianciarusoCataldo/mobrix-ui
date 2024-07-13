import { LazyExoticComponent, JSX } from "react";
import {
  ClosableComponent,
  ComponentWithCallback,
  MbxUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/TabViewer MoBrix-ui TabViewer} single Tab
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/TabViewer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type Tab = {
  /** Tab label */
  label: string;

  /** Tab content */
  content?: JSX.Element;

  lazy?: LazyExoticComponent<() => JSX.Element>;

  dismissable?: boolean;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} TabViewer props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/TabViewer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type TabViewerProps = ClosableComponent & {
  /** If `true`, every tab is dismissable (except the ones with `dismissable` property explicitly set to `false`) */
  dismissable?: boolean;

  /** Tabs array. When a tab is selected, its index (position into array) is passed to the `onChange` callback */
  tabs?: Tab[];

  /** Custom className applied on every tab */
  tabClassName?: string;

  /** Custom className applied on the tab view container (where the selected tab content is showed) */
  tabViewClassName?: string;

  /** Custom className applied only on selected tab */
  tabSelectedClassName?: string;

  /** Custom className applied on every unselected tab */
  tabUnselectedClassName?: string;

  /** Custom props applied on every tab */
  tabProps?: Record<string, any>;

  /** Custom props applied on the tab view container (where the selected tab content is showed) */
  tabViewProps?: Record<string, any>;

  /** Custom props applied only on selected tab */
  tabSelectedProps?: Record<string, any>;

  /** Custom props applied on every unselected tab */
  tabUnselectedProps?: Record<string, any>;

  /** Initially selected tab (as an array index, default to `0`) */
  selected?: number;
} & ComponentWithCallback<number>;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} TabViewer component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/TabViewer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type TabViewerComponent = MbxUiComponent<TabViewerProps>;
