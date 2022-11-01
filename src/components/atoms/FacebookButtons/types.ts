import { CommonProps, MoBrixUiComponent } from "../../../utils/global";

export type FacebookButtonsProps = CommonProps & {
  pageId: string;
  share?: boolean;
  small?: boolean;
  width?: number;
};

export type FacebookButtonsComponent = MoBrixUiComponent<FacebookButtonsProps>;
