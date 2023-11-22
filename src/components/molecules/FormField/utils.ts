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
export const valueFormatters = {
  text: (value: any) => {
    const result = String(value);
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
export const fieldFormatters = {
  text: {
    component: Input,
    format: valueFormatters.text,
  },
  numeric: {
    component: Counter,
    format: valueFormatters.number,
  },
  boolean: {
    component: CheckBox,
    format: valueFormatters.boolean,
  },
  checkbox: {
    component: CheckBox,
    format: valueFormatters.boolean,
  },
  radio: {
    component: RadioButton,
    format: valueFormatters.boolean,
  },
  toggle: {
    component: Toggle,
    format: valueFormatters.boolean,
  },
  rater: {
    component: Rater,
    format: valueFormatters.number,
  },
  slider: {
    component: Slider,
    format: valueFormatters.number,
  },
  counter: {
    component: Counter,
    format: valueFormatters.number,
  },
  input: {
    component: Input,
    format: valueFormatters.text,
  },
} as const;
