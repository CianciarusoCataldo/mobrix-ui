import { ComponentWithCallback, MoBrixUiComponent } from "../../global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/TabPanel MoBrix-ui TabPanel} single Tab
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/TabPanel
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type Tab = {
  label: string | JSX.Element;
  content: JSX.Element;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} TabPanel props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/TabPanel
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type TabPanelProps = {
  tabs?: Tab[];
} & ComponentWithCallback<Number>;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} TabPanel component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/TabPanel
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type TabPanelComponent = MoBrixUiComponent<TabPanelProps>;
