import React from "react";

import { BuilderComponent, MoBrixUiComponent } from "../../../types/global";
import { ReviewProps } from "../../../types/components/molecules/Review";

import { icons } from "./icons";
import Link from "../../atoms/Link";
import Rater from "../Rater";

const allowedLogoTypes = Object.keys(icons);

const reviewComponent: MoBrixUiComponent<ReviewProps, BuilderComponent[]> = ({
  user,
  description,
  rate,
  max,
  icon,
  url,
  logo,
  rateType,
}) => {
  const selectedLogo =
    logo && allowedLogoTypes.includes(logo) ? logo : "default";

  return [
    <div key="url" className="review-url-container">
      {url ? (
        <Link newTab to={url}>
          {icons[selectedLogo]}
        </Link>
      ) : (
        logo && icons[selectedLogo]
      )}
    </div>,
    <div className="review-info-box" key="info">
      <div className="review-user-info">
        <div className="review-photo">{icon}</div>
        {user && <span className="review-username">{user}</span>}
      </div>
      {description && <span className="review-description">{description}</span>}
    </div>,
    <Rater
      key="rate"
      hide={!rate}
      type={rateType}
      unstyled
      readonly
      value={rate}
      max={max}
    />,
  ];
};

export default reviewComponent;
