import React from "react";

import { BuilderComponent, MbxUiComponent, ReviewProps } from "../../../types";

import { icons } from "./icons";
import Link from "../../atoms/Link";
import Rater from "../../atoms/Rater";
import { Label } from "../../atoms";

const allowedLogoTypes = Object.keys(icons);

const reviewComponent: MbxUiComponent<ReviewProps, BuilderComponent[]> = ({
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
}) => {
  const selectedLogo =
    logo && allowedLogoTypes.includes(logo) ? logo : "default";

  return [
    <Link
      key="rev_link"
      dark={dark}
      hover={hover && !disabled}
      newTab
      to={url}
      disabled={disabled}
      features={{ noShFc: true, opFc: true }}
    >
      {icons[selectedLogo]}
    </Link>,
    <div key="info">
      <div key="topc">
        <div key="ph" data-mbx-cls="rev-ph">
          {icon}
        </div>
        {user && (
          <Label key="user" disabled={disabled} dark={dark}>
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
      max={max}
    />,
  ];
};

export default reviewComponent;
