import React from "react";

import { BuilderComponent, MbxUiComponent, ReviewProps } from "../../../types";

import { icons } from "./icons";
import Link from "../../atoms/Link";
import Rater from "../../atoms/Rater";

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
    <div key="url" data-mbx-scl="wfu;flxr" data-mbx-cls="rev-url-c">
      <Link
        dark={dark}
        hover={hover && !disabled}
        newTab
        to={url}
        disabled={disabled}
        features={{ noShFc: true, opFc: true }}
      >
        {icons[selectedLogo]}
      </Link>
    </div>,
    <div data-mbx-scl="flxc" data-mbx-cls="rev-inf-b" key="info">
      <div data-mbx-scl="flxr;mauto">
        <div data-mbx-cls="rev-ph">{icon}</div>
        {user && (
          <span data-mbx-cls="rev-us-name" data-mbx-scl="myauto">
            {user}
          </span>
        )}
      </div>
      {description && (
        <span data-mbx-cls="rev-ds" data-mbx-scl="wfu">
          {description}
        </span>
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
