import React from "react";

import { BuilderComponent, MbxUiComponent, RaterProps } from "../../../types";

import { ICONS } from "./icons";
import IconButton from "../IconButton";

const Component: MbxUiComponent<RaterProps, BuilderComponent[]> = ({
  type = "star",
  max,
  readonly,
  onChange,
  value,
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

    const isSel = i + 1 === value;

    return (
      <IconButton
        active={active && !isSel}
        key={`vote_${i}`}
        dark={dark}
        a11y={a11y && !readonly}
        disabled={disabled}
        hover={hover && !isSel && !readonly}
        {...(readonly && {
          style: { cursor: "unset" },
        })}
        {...(!(readonly || disabled) && {
          onClick: () => {
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
