import CheckBox from "../../atoms/CheckBox";
import Counter from "../../atoms/Counter";
import Input from "../../atoms/Input";
import RadioButton from "../../atoms/RadioButton";

/* istanbul ignore next */
export const fieldFormatters = {
  text: {
    component: Input,
    format: (value: any) => {
      const result = String(value);
      if (result.length < 1) {
        return "";
      } else {
        return result;
      }
    },
  },
  numeric: {
    component: Counter,
    format: (value: any) => value as number,
  },
  boolean: {
    component: CheckBox,
    format: (value: any) => value as boolean,
  },
  checkbox: {
    component: CheckBox,
    format: (value: any) => value as boolean,
  },
  radio: {
    component: RadioButton,
    format: (value: any) => value as boolean,
  }
};
