import { MoBrixUiComponent } from "../../../utils/global";

export type FacebookButtonsProps = {
  pageId: string;
  share?: boolean;
  small?: boolean;
  width?: number;
};

export type FacebookButtonsComponent = MoBrixUiComponent<FacebookButtonsProps>;
