import { ComponentWithChildren, MbxUiComponent } from "../../global";

export type SupportedPackageRegistry = "npm" | "github" | "github-release";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} GithubWidget component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/GithubWidget
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type GithubWidgetProps = ComponentWithChildren<any> & {
  /** Github repository name */
  repo?: string;

  /** Github repository user */
  user?: string;

  /** Default branch (if not set, `main` branch is used instead) */
  branch?: string;

  /**  */
  language?: SupportedPackageRegistry;

  /** Library url */
  url?: string;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Container component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Container
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type GithubWidgetComponent = MbxUiComponent<GithubWidgetProps>;
