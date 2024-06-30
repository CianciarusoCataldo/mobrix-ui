import Container from "../../molecules/Container";
import Label from "../Label";

import React from "react";
import {
  PackageVersionProps,
  MbxUiComponent,
  SupportedPackageSource,
} from "../../../types";

const PackageVersionComponent: MbxUiComponent<PackageVersionProps, string> = ({
  dark,
  name,
  source = "npm",
  user,
  branch = "main",
  ...props
}) => {
  const [version, setVersion] = React.useState("");

  const REGISTRIES_CALLBACKS: Record<
    SupportedPackageSource,
    (name: string, user: string, onError: (er) => void) => void
  > = {
    github: (name, user, onError) => {
      user &&
        fetch(
          `https://raw.githubusercontent.com/${user}/${name}/${branch}/package.json`,
        )
          .then((res) => res.json())
          .then((resJson) => {
            setVersion(resJson.version || "");
          })
          .catch(onError);
    },
    "github-release": (name, user, onError) => {
      user &&
        fetch(`https://github.com/${user}/${name}/releases/latest`)
          .then((res) => {
            setVersion(
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
    npm: (name, user, onError) => {
      fetch(`https://registry.npmjs.org/${name}/latest`)
        .then((res) => res.json())
        .then((res) => {
          setVersion(res.version || "");
        })
        .catch(onError);
    },
  };

  React.useEffect(() => {
    try {
      name && REGISTRIES_CALLBACKS[source](name, user, (err) => setVersion(""));
    } catch (er) {
      setVersion("");
    }
  }, []);

  return version;
};

export default PackageVersionComponent;
