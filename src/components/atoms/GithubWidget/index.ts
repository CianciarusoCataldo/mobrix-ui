import { buildMbxStandardComponent } from "../../../tools";
import { GithubWidgetComponent } from "../../../types/components/atoms/github-widget";
import internalComponent from "./component";

const GithubWidget: GithubWidgetComponent = ({
  repository,
  owner,
  ...shared
}) => {
  return buildMbxStandardComponent(shared, (sharedProps) => ({
    name: "github-widget",
    commonProps: sharedProps,
    Component: internalComponent({
      repository,
      owner,
      ...sharedProps,
    }),
  }));
};

export default GithubWidget;
