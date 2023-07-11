import {
  BuilderComponent,
  ComponentWithChildren,
  MoBrixUiComponent,
} from "../../global";

export type PopupProps = ComponentWithChildren<
  BuilderComponent | BuilderComponent[]
>;

export type PopupComponent = MoBrixUiComponent<PopupProps>;
