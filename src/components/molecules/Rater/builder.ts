import { RaterProps } from "./types";

import classNames from "classnames";

import { MobrixUiReactiveComponentBuilder } from "../../../utils/global";

import raterComponent from "./component";

const raterComponentBuilder: MobrixUiReactiveComponentBuilder<
  number,
  RaterProps
> = ({
  type,
  max,
  readonly,
  vertical,
  onChange,
  value,
  setValue,
  className,
  ...commonProps
}) => ({
  Component: raterComponent({
    type,
    max,
    readonly,
    onChange,
    value,
    setValue,
  }),
  commonProps: {
    ...commonProps,
    className: classNames(className, {
      vertical: vertical,
      horizontal: !vertical,
    }),
  },
});

export default raterComponentBuilder;
