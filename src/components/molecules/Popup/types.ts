import {
  BuilderComponent,
  CommonProps,
  ComponentWithChildren,
  MoBrixUiComponent,
} from "../../../utils/global";

export type PopupProps = CommonProps &
  ComponentWithChildren<BuilderComponent | BuilderComponent[]>;

export type PopupComponent = MoBrixUiComponent<PopupProps>;
