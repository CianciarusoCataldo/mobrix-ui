import {
  CheckBox,
  Counter,
  Input,
  Password,
  RadioButton,
  Rater,
  Slider,
  Toggle,
} from "../../atoms";

/* istanbul ignore next */
export const vFuncs = {
  txt: (value: any) => {
    const result = value ? String(value) : "";
    if (result.length < 1) {
      return "";
    } else {
      return result;
    }
  },
  nmb: (value: any) => value as number,
  bol: (value: any) => value as boolean,
} as const;

/* istanbul ignore next */
export const fldfn = {
  text: [Input, "txt"],
  numeric: [Counter, "nmb"],
  boolean: [CheckBox, "bol"],
  checkbox: [CheckBox, "bol"],
  radio: [RadioButton, "bol"],
  toggle: [Toggle, "bol"],
  rater: [Rater, "nmb"],
  slider: [Slider, "nmb"],
  counter: [Counter, "nmb"],
  input: [Input, "txt"],
  password: [Password, "txt"],
} as const;
