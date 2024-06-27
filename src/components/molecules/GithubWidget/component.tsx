import Container from "../Container";
import Label from "../../atoms/Label";

import React from "react";
import {
  GithubWidgetProps,
  MbxUiComponent,
  SupportedPackageRegistry,
} from "../../../types";

const REGISTRIES: Record<SupportedPackageRegistry, {}> = {
  github: {
    url: "https://raw.githubusercontent.com/<USER>/<REPO>/<BRANCH>/package.json",
    toJson: true,
  },
  "github-release": {},
  npm: {},
};

const GithubWidgetComponent: MbxUiComponent<GithubWidgetProps> = ({
  repo,
  user: usr,
  dark,
  branch = "main",
  url = "",
  ...props
}) => {
  const [version, setVersion] = React.useState("");
  const [name, setName] = React.useState("");
  const [user, setUser] = React.useState("");

  React.useEffect(() => {}, []);
  try {
    if (url.startsWith("https://www.npmjs.com/package/")) {
      let urlParsed = url
        .replace("https://www.npmjs.com/package/", "")
        .split("/");
      setName(urlParsed[1]);
      setUser(urlParsed[0]);
    } else if (url.startsWith("https://github.com/")) {
      fetch(
        `https://raw.githubusercontent.com/${usr}/${repo}/${branch}/package.json`
      )
        .then((res) => res.json())
        .then((resJson) => {
          // console.log(resJson);
          setVersion(resJson.version || "");
        });
    }
  } catch (er) {
    try {
      fetch(
        `https://raw.githubusercontent.com/${usr}/${repo}/${branch}/package.json`
      )
        .then((res) => res.json())
        .then((resJson) => {
          // console.log(resJson);
          setVersion(resJson.version || "");
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container dark={dark}>
      <Label shadow={false}>{repo}</Label>
      <Label shadow={false}>v{version}</Label>
    </Container>
  );
};

export default GithubWidgetComponent;
