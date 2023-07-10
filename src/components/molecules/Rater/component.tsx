import React from "react";

import { MobrixUiReactiveComponent, RaterProps } from "../../../types";

import { ICONS } from "./icons";
import Button from "../../atoms/Button";

const RaterComponent: MobrixUiReactiveComponent<number, RaterProps> = ({
  type,
  max,
  readonly,
  onChange,
  value: actualValue,
  setValue,
}) => {
  const voteType = type || "star";
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
      readonly ? (
        <div key={`vote_${i}`}>{ICONS[voteType][iconToShow]}</div>
      ) : (
        <Button
          key={`vote_${i}`}
          unstyled
          onClick={() => {
            let newVote: number = i + 1;
            setValue(newVote);
            onChange && onChange(i + 1);
          }}
          onMouseEnter={() => {
            setHover(i);
          }}
          onMouseLeave={() => {
            setHover(null);
          }}
          id={`vote_${i}`}
        >
          {ICONS[voteType][iconToShow]}
        </Button>
      )
    );
  }

  return iconArray;
};

export default RaterComponent;
