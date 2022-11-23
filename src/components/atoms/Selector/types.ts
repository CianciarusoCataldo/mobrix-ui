import {
  ComponentWithCallback,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../../utils/global";

export type SelectorProps = ComponentWithValue<number> &
  ComponentWithCallback<number> & {
    elements?: string[];
  };

export type SelectorComponent = MoBrixUiComponent<SelectorProps>;
