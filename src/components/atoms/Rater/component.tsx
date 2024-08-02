import React from "react";

import { BuilderComponent, MbxUiComponent, RaterProps } from "../../../types";

import { defIcE, defIcF } from "./icons";
import IconButton from "../IconButton";

const Component: MbxUiComponent<RaterProps, BuilderComponent[]> = ({
  max = 5,
  readonly,
  onChange,
  value,
  disabled,
  a11y,
  dark,
  hover,
  active,
  fullIcon = defIcF,
  emptyIcon = defIcE,
}) => {
  const [hovEl, setHov] = React.useState<number | null>(null);
  const [mVal, setMax] = React.useState<number>(max);

  React.useEffect(() => {
    setMax(Number.parseInt(String(max)));
  }, [max]);

  return new Array(mVal).fill("").map((e, i) => {
    let icon = emptyIcon;

    if (hovEl || hovEl === 0) {
      icon = hovEl >= i ? fullIcon : emptyIcon;
    } else {
      icon = i + 1 <= value ? fullIcon : emptyIcon;
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
        {icon}
      </IconButton>
    );
  });
};

export default Component;
