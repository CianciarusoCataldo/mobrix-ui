import {
  BuilderComponent,
  ComponentWithChildren,
  MoBrixUiComponent,
} from "../../../utils/global";

export type PopupProps = ComponentWithChildren<
  BuilderComponent | BuilderComponent[]
>;

export type PopupComponent = MoBrixUiComponent<PopupProps>;
