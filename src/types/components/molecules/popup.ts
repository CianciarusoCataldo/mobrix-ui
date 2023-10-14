import {
  BuilderComponent,
  ComponentWithChildren,
  MoBrixUiComponent,
} from "mobrix-ui-types-essential";

export type PopupProps = ComponentWithChildren<
  BuilderComponent | BuilderComponent[]
>;

export type PopupComponent = MoBrixUiComponent<PopupProps>;
