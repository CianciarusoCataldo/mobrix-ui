import React from "react";

import { MbxUiReactiveComponent, RaterProps } from "../../../types";

import { ICONS } from "./icons";
import IconButton from "../IconButton";

const Component: MbxUiReactiveComponent<number, RaterProps> = ({
  type = "star",
  max,
  readonly,
  /* istanbul ignore next */
  onChange = () => {},
  value,
  setValue,
  disabled,
  a11y,
  dark,
  hover,
  active,
}) => {
  let start = max || 5;
  const [hovEl, setHov] = React.useState<number | null>(null);
  const [mVal, setMax] = React.useState<number>(start);

  React.useEffect(() => {
    if (max) {
      setMax(Number.parseInt(String(max)));
    }
  }, [max]);

  return new Array(mVal).fill("").map((e, i) => {
    let icon: "FULL" | "EMPTY" = "EMPTY";

    if (hovEl || hovEl === 0) {
      icon = hovEl >= i ? "FULL" : "EMPTY";
    } else {
      icon = i + 1 <= value ? "FULL" : "EMPTY";
    }

    return (
      <IconButton
        active={active}
        key={`vote_${i}`}
        dark={dark}
        a11y={a11y && !readonly}
        disabled={disabled}
        hover={hover && !readonly}
        {...(readonly && {
          style: { cursor: "unset" },
        })}
        {...(!(readonly || disabled) && {
          onClick: () => {
            let newVote: number = i + 1;
            setValue(newVote);
            onChange(i + 1);
          },
          ...(hover && {
            onMouseEnter: () => {
              setHov(i);
            },
            onMouseLeave: () => {
              setHov(null);
            },
          }),
        })}
      >
        {ICONS[type][icon]}
      </IconButton>
    );
  });
};

export default Component;
