import {
  BuilderComponent,
  ComponentWithChildren,
  MoBrixUiComponent,
} from "../../../types/global";

export type PopupProps = ComponentWithChildren<
  BuilderComponent | BuilderComponent[]
>;

export type PopupComponent = MoBrixUiComponent<PopupProps>;
