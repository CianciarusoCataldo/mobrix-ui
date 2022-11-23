import React from "react";

import { BuilderComponent, MoBrixUiComponent } from "../../../utils/global";
import { ReviewProps } from "./types";

import { icons } from "./icons";
import Link from "../../atoms/Link";
import Rater from "../Rater";

const reviewComponent: MoBrixUiComponent<ReviewProps, BuilderComponent[]> = ({
  user,
  description,
  rate,
  max,
  icon,
  url,
  logo,
  rateType,
}) => [
  <div key="url" className="review-url-container">
    {url ? (
      <Link newTab to={url}>
        {icons[logo || "default"]}
      </Link>
    ) : (
      logo && icons[logo]
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

export default reviewComponent;
