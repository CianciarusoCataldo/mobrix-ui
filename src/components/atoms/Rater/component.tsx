import React from "react";

import { MbxUiReactiveComponent, RaterProps } from "../../../types";

import { ICONS } from "./icons";
import IconButton from "../IconButton";

const RaterComponent: MbxUiReactiveComponent<number, RaterProps> = ({
  type = "star",
  max,
  readonly,
  /* istanbul ignore next */
  onChange = () => {},
  value: actualValue,
  setValue,
  disabled,
  a11y,
  dark,
}) => {
  let startMax = max || 5;

  const [hoveredElement, setHover] = React.useState<number | null>(null);
  const [maxValue, setMax] = React.useState<number>(startMax);

  React.useEffect(() => {
    if (max) {
      setMax(Number.parseInt(String(max)));
    }
  }, [max]);

  let iconArray: JSX.Element[] = [];

  for (let i: number = 0; i < maxValue; ++i) {
    let iconToShow: "FULL" | "EMPTY" = "EMPTY";

    if (hoveredElement || hoveredElement === 0) {
      iconToShow = hoveredElement >= i ? "FULL" : "EMPTY";
    } else {
      iconToShow = i + 1 <= actualValue ? "FULL" : "EMPTY";
    }

    iconArray.push(
      <IconButton
        key={`vote_${i}`}
        dark={dark}
        a11y={a11y && !readonly}
        disabled={disabled}
        features={{ noShFc: true, opFc: true }}
        {...(!(readonly || disabled) && {
          onClick: () => {
            let newVote: number = i + 1;
            setValue(newVote);
            onChange(i + 1);
          },
          onMouseEnter: () => {
            setHover(i);
          },
          onMouseLeave: () => {
            setHover(null);
          },
        })}
      >
        {ICONS[type][iconToShow]}
      </IconButton>
    );
  }

  return iconArray;
};

export default RaterComponent;
