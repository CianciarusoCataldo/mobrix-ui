import React from "react";
import { PackageVersionProps, MbxUiComponent } from "../../../types";
import { DEFAULT_BRANCH, REGISTRIES_HANDLERS } from "./handlers";

const PackageVersionComponent: MbxUiComponent<PackageVersionProps, string> = ({
  dark,
  name,
  source = "npm",
  user,
  branch = DEFAULT_BRANCH,
  ...props
}) => {
  const [version, setVersion] = React.useState("");

  React.useEffect(() => {
    try {
      console.log("effect");

      name &&
        REGISTRIES_HANDLERS[source](
          name,
          user,
          branch,
          (version) => setVersion(version),
          (err) => setVersion(""),
        );
    } catch (er) {
      setVersion("");
    }
  }, [name, user, source, branch]);

  return version;
};

export default PackageVersionComponent;