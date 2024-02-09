import { buildMbxStandardComponent } from "../../../tools";
import { GithubWidgetComponent } from "../../../types/components/atoms/github-widget";

const GithubWidget: GithubWidgetComponent = ({
  repository,
  owner,
  ...shared
}) => {
  return buildMbxStandardComponent(shared, (sharedProps) => ({
    name: "github-widget",
    commonProps: sharedProps,
  }));
};

export default GithubWidget;
