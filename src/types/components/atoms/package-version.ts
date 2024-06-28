import { ComponentWithChildren, MbxUiComponent } from "../../global";

export type SupportedPackageSource = "npm" | "github" | "github-release";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} PackageVersion component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/PackageVersion
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type PackageVersionProps = ComponentWithChildren<any> & {
  /** Package location (actually, NPM, Github and Github release are supported) */
  source?: SupportedPackageSource;

  /** Library name (it is used as repo name when `source = github`) */
  name?: string;

  /** Library owner (it is used as repo owner username when `source = github` or `source = github-release`) */
  user?: string;

  /** Github repo default branch (used when `source = github`) */
  branch?: string;
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
export type PackageVersionComponent = MbxUiComponent<PackageVersionProps>;
