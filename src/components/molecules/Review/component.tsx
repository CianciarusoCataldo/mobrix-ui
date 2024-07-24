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
  logo,
  rateType,
  disabled,
  hover,
  dark,
  active,
  a11y,
}) => {
  const cProps = { dark, disabled, a11y, hover };
  return [
    <Link
      key="rev_link"
      newTab
      to={url}
      features={{ opFc: true }}
      active={active}
      hide={!url}
      {...cProps}
    >
      {logo ||
        link({
          height: "30px",
          width: "30px",
        })}
    </Link>,
    <div key="info">
      <div key="topc">
        <div key="ph">{icon}</div>
        {user && (
          <Label {...cProps} key="user">
            {user}
          </Label>
        )}
      </div>
      {description && (
        <Label key="desc" {...cProps}>
          {description}
        </Label>
      )}
    </div>,
    <Rater
      key="rate"
      hide={!rate}
      type={rateType}
      background={false}
      shadow={false}
      readonly
      value={rate}
      max={max}
      active={active}
      {...cProps}
    />,
  ];
};

export default component;
