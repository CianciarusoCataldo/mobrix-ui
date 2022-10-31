import "./styles.css";

import React from "react";

import { ReviewComponent } from "./types";

import { icons } from "./icons";

import { buildBoxComponent } from "../../../utils";

import Link from "../../atoms/Link";
import Rater from "../Rater";

/**
 * A smart review container, useful to show reviews on your website with custom data inside. Optionally, an external link can be set to redirect
 * user to the platform where the review is located.
 *
 * @since 1.1.0
 *
 * @param {string} user username showed above the review description, at the right of the icon
 * @param {string} description review description showed below the review username, at the top of the rate
 * @param {string} url review external url. If set, an icon will be showed at the top right of the review
 * @param {number} rate review vote, showed at the bottom of the review
 * @param {number} rate review vote icon type, to choose which icon will be used to show the review rate (allowed icons type are `stars` and `circle`)
 * @param {number} max max vote (max number of rate icons showed)
 * @param {"default" | "facebook" | "twitter" | "google" | "linkedin" | "github"} logo Social icon type, showed at the top right of the container. Supports popular web services like Facebook, Twitter, Google and so on. Proviced icon list will grow up time by time and will be updated with the latest web services, to keep it usable for the future.
 * @param {JSX.Element | string} label `common MoBrix-ui prop` - Component top label
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Review usage</caption>
 * import { render } from "react-dom";
 * import { Review } from 'mobrix-ui';
 *
 * render(<Review
 *          logo="facebook"
 *          rate={3}
 *          user="Example user"
 *          description="Example review description"
 *        />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Review
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Review: ReviewComponent = ({
  user,
  description,
  rate,
  max,
  icon,
  url,
  logo,
  label,
  rateType,
  ...commonProps
}) => {
  return buildBoxComponent({
    label,
    callBack: () => ({
      name: "mobrix-ui-review",
      commonProps,
      Component: [
        <div key="url" className="url-container">
          {url ? (
            <Link newTab to={url}>
              {icons[logo || "default"]}
            </Link>
          ) : (
            logo && icons[logo]
          )}
        </div>,
        <div className="info-box" key="info">
          <div className="user-info">
            <div className="photo">{icon}</div>
            {user && <span className="username">{user}</span>}
          </div>
          {description && <span className="description">{description}</span>}
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
      ],
    }),
  });
};

export default Review;
