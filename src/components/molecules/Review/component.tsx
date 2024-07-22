import React from "react";

import { BuilderComponent, MbxUiComponent, ReviewProps } from "../../../types";

import Link from "../../atoms/Link";
import Rater from "../../atoms/Rater";
import { Label } from "../../atoms";
import { link } from "../../../icons";

const component: MbxUiComponent<ReviewProps, BuilderComponent[]> = ({
  user,
  description,
  rate,
  max,
  icon,
  url,
  logo = link({
    height: "30px",
    width: "30px",
  }),
  rateType,
  disabled,
  hover,
  dark,
  active,
  a11y,
}) => [
  <Link
    a11y={a11y}
    key="rev_link"
    dark={dark}
    hover={hover && !disabled}
    newTab
    to={url}
    disabled={disabled}
    features={{ opFc: true }}
    active={active}
    hide={!url}
  >
    {logo}
  </Link>,
  <div key="info">
    <div key="topc">
      <div key="ph">{icon}</div>
      {user && (
        <Label a11y={a11y} key="user" disabled={disabled} dark={dark}>
          {user}
        </Label>
      )}
    </div>
    {description && (
      <Label key="desc" disabled={disabled} dark={dark}>
        {description}
      </Label>
    )}
  </div>,
  <Rater
    disabled={disabled}
    key="rate"
    hide={!rate}
    type={rateType}
    background={false}
    shadow={false}
    readonly
    value={rate}
    a11y={a11y}
    max={max}
  />,
];

export default component;
