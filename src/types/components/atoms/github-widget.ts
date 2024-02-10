import { MoBrixUiComponent } from "../../global";

export type GithubWidgetProps = {
  repository: string;
  owner: string;
};

export type GithubWidgetComponent = MoBrixUiComponent<GithubWidgetProps>;
