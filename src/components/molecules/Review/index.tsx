import React from "react";

import Container from "../Container";
import Link from "../../atoms/Link";
import Rater from "../Rater";

import "./styles.css";

import { ReviewComponent, ReviewProps } from "./types";

import { icons } from "./icons";
import { buildBoxComponent } from "../../../utils";
import classNames from "classnames";

/**
 * A smart review container, useful to show reviews on your website with custom data inside. Optionally, an external link can be set to redirect
 * user to the platform where the review is located.
 *
 * @since 1.1.0
 *
 * @param {MobrixReviewProps["user"]} user username showed above the review description, at the right of the icon
 * @param {MobrixReviewProps["description"]} description review description showed below the review username, at
 * @param {MobrixReviewProps["url"]} url review external url. If set, an icon will be showed at the top right of the review
 * @param {MobrixReviewProps["rate"]} rate review vote, showed at the bottom of the review
 * @param {MobrixReviewProps["maxRate"]} maxRate max vote (max number of icons showed)
 * @param {MobrixReviewProps["type"]} logo Social icon, showed at the top right of the container. Supported icons (right now, but will be increased time by time) are Facebook, Twitter, LinkedIn, Github and Google.
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
 *          type="facebook"
 *          value={3}
 *          user="Test user"
 *          description="Test description"
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
  value,
  max,
  icon,
  url,
  logo,
  label,
  className,
  shadow,
  rateType,
  ...commonProps
}) => {
  return buildBoxComponent<number>({
    value,
    label,
    callBack: (value) => ({
      name: "mobrix-ui-review",
      commonProps,
      Component: (
        <Container
          unstyled={commonProps.unstyled}
          dark={commonProps.dark}
          shadow={shadow}
          className={classNames("external-container", className)}
        >
          <div className="url-container">
            {url ? (
              <Link newTab to={url}>
                {icons[logo || "default"]}
              </Link>
            ) : (
              logo && icons[logo]
            )}
          </div>

          <div className="info-box">
            <div className="user-info">
              <div className="photo">{icon}</div>
              {user && <span className="username">{user}</span>}
            </div>
            {description && <span className="description">{description}</span>}
          </div>
          <Rater
            hide={!value}
            type={rateType}
            unstyled
            readonly
            value={value}
            max={max}
          />
        </Container>
      ),
    }),
  });
};

export default Review;
