import "./styles.css";

import { RaterComponent } from "../../../types";

import { buildMobrixUiReactiveComponent } from "../../../tools";

import raterComponent from "./component";

/**
 * MBX_DESCRIPTION
 *
 * MBX_PROPS
 *
 * @example MBX_EXAMPLE
 *
 * @since MBX_SINCE
 *
 * @author MBX_AUTHOR
 *
 * @copyright MBX_COPYRIGHT
 */
const Rater: RaterComponent = ({
  value: inputValue,
  type,
  max,
  readonly,
  onChange,
  value,
  vertical = false,
  additionalProps = {},
  ...commonProps
}) =>
  buildMobrixUiReactiveComponent<number>({
    name: "rater",
    inputValue,
    defaultValue: 0,
    Component: ({ value, setValue }) =>
      raterComponent({
        type,
        max,
        readonly,
        onChange,
        value,
        setValue,
        disabled: commonProps.disabled,
      }),
    additionalProps: {
      ...additionalProps,
      "data-mbx-vertical": vertical,
    },
    commonProps,
  });

export default Rater;
