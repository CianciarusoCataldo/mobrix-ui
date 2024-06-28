import Container from "../../molecules/Container";
import Label from "../Label";

import React from "react";
import {
  PackageVersionProps,
  MbxUiComponent,
  SupportedPackageSource,
} from "../../../types";

const PackageVersionComponent: MbxUiComponent<PackageVersionProps> = ({
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
    (name: string, user: string) => void
  > = {
    github: (name, user) => {
      user &&
        fetch(
          `https://raw.githubusercontent.com/${user}/${name}/${branch}/package.json`,
        )
          .then((res) => res.json())
          .then((resJson) => {
            setVersion(resJson.version || "");
          });
    },
    "github-release": (name, user) => {
      user &&
        fetch(`https://github.com/${user}/${name}/releases/latest`).then(
          (res) => {
            setVersion(
              res.url
                ? res.url.replace(
                    `https://github.com/${user}/${name}/releases/tag/v`,
                    "",
                  )
                : "",
            );
          },
        );
    },
    npm: (name, user) => {
      fetch(`https://registry.npmjs.org/${name}/latest`)
        .then((res) => res.json())
        .then((res) => {
          setVersion(res.version || "");
        });
    },
  };

  React.useEffect(() => {
    try {
      name && REGISTRIES_CALLBACKS[source](name, user);
    } catch (er) {
      console.log(er);
      setVersion("");
    }
  }, []);

  return <Label shadow={false}>v{version}</Label>;
};

export default PackageVersionComponent;
