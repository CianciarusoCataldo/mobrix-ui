import {
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/TabViewer MoBrix-ui TabViewer} single Tab
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/TabViewer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type Tab = {
  label: string;
  content: JSX.Element;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} TabViewer props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/TabViewer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type TabViewerProps = {
  tabs?: Tab[];
  tabClassName?: string;
  tabViewClassName?: string;
  tabSelectedClassName?: string;
  tabUnselectedClassName?: string;
} & ComponentWithCallback<number> &
  ComponentWithValue<number>;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} TabViewer component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/TabViewer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type TabViewerComponent = MoBrixUiComponent<TabViewerProps>;
