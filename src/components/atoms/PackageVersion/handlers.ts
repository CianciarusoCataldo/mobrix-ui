import { SupportedPackageSource } from "../../../types";

export const DEFAULT_BRANCH = "main";

export const REGISTRIES_HANDLERS: Record<
  SupportedPackageSource,
  (
    name: string,
    user: string,
    branch: string,
    onSuccess: (version: string) => void,
    onError: (er: any) => void,
  ) => void
> = {
  github: (name, user, branch, onSuccess, onError) => {
    user &&
      fetch(
        `https://raw.githubusercontent.com/${user}/${name}/${
          branch.length > 0 ? branch : DEFAULT_BRANCH
        }/package.json`,
      )
        .then((res) => res.json())
        .then((resJson) => {
          onSuccess(resJson.version || "");
        })
        .catch(onError);
  },
  "github-release": (name, user, branch, onSuccess, onError) => {
    user &&
      fetch(`https://github.com/${user}/${name}/releases/latest`)
        .then((res) => {
          onSuccess(
            res.url
              ? res.url.replace(
                  `https://github.com/${user}/${name}/releases/tag/`,
                  "",
                )
              : "",
          );
        })
        .catch(onError);
  },
  npm: (name, user, branch, onSuccess, onError) => {
    fetch(`https://registry.npmjs.org/${name}/latest`)
      .then((res) => res.json())
      .then((res) => {
        onSuccess(res.version || "");
      })
      .catch(onError);
  },
};
