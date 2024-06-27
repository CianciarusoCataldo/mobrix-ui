import { GithubWidgetComponent } from "../../../types/components/molecules/github-widget";

import { buildMbxStandardComponent } from "../../../tools";
import component from "./component";

const GithubWidget: GithubWidgetComponent = ({
  repo,
  user,
  branch,
  url,
  ...props
}) =>
  buildMbxStandardComponent(props, (sharedProps) => ({
    name: "container",
    Component: component({ ...sharedProps, user, repo, branch, url }),
    commonProps: sharedProps,
  }));

export default GithubWidget;
