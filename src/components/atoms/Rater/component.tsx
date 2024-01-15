import React from "react";

import { MobrixUiReactiveComponent, RaterProps } from "../../../types";

import { ICONS } from "./icons";
import Button from "../Button";

const RaterComponent: MobrixUiReactiveComponent<number, RaterProps> = ({
  type = "star",
  max,
  readonly,
  onChange = () => {},
  value: actualValue,
  setValue,
  disabled,
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
      <Button
        key={`vote_${i}`}
        unstyled
        disabled={disabled}
        additionalProps={{
          "data-mbx-test": `vote_${i}`,
        }}
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
      </Button>
    );
  }

  return iconArray;
};

export default RaterComponent;
