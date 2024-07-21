import {
  CheckBox,
  Counter,
  Input,
  RadioButton,
  Rater,
  Slider,
  Toggle,
} from "../../atoms";

/* istanbul ignore next */
export const vFormat = {
  text: (value: any) => {
    const result = value ? String(value) : "";
    if (result.length < 1) {
      return "";
    } else {
      return result;
    }
  },
  number: (value: any) => value as number,
  boolean: (value: any) => value as boolean,
};

/* istanbul ignore next */
export const formatters = {
  text: {
    component: Input,
    format: vFormat.text,
  },
  numeric: {
    component: Counter,
    format: vFormat.number,
  },
  boolean: {
    component: CheckBox,
    format: vFormat.boolean,
  },
  checkbox: {
    component: CheckBox,
    format: vFormat.boolean,
  },
  radio: {
    component: RadioButton,
    format: vFormat.boolean,
  },
  toggle: {
    component: Toggle,
    format: vFormat.boolean,
  },
  rater: {
    component: Rater,
    format: vFormat.number,
  },
  slider: {
    component: Slider,
    format: vFormat.number,
  },
  counter: {
    component: Counter,
    format: vFormat.number,
  },
  input: {
    component: Input,
    format: vFormat.text,
  },
} as const;
