import "./styles.css";

import { ReviewComponent } from "../../../types";

import {
  buildMbxStandardComponent,
  buildMobrixUiStandardComponent,
} from "../../../tools";

import reviewComponent from "./component";

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
 * @param {number} rateType review vote icon type, to choose which icon will be used to show the review rate (allowed icons type are `stars` and `circle`)
 * @param {number} max max vote (max number of rate icons showed)
 * @param {"default" | "facebook" | "twitter" | "google" | "linkedin" | "github"} logo Social icon type, showed at the top right of the container. Supports popular web services like Facebook, Twitter, Google and so on. Proviced icon list will grow up time by time and will be updated with the latest web services, to keep it usable for the future.
 * @param {string} className `common MoBrix-ui prop` - custom className
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component, enabling or not MoBrix-ui custom styles
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component
 * @param {boolean} animated `common MoBrix-ui prop` enable/disable component animations
 * @param {string} key `common MoBrix-ui prop` - custom component React key (the standard {@link https://reactjs.org/docs/lists-and-keys.html key parameter})
 * @param {boolean} a11y `common MoBrix-ui prop` - enable/disable accessibility features
 * @param {boolean} a11yDark `common MoBrix-ui prop` - if the `a11y` parameter is `true`, override standard focus color style with/without dark mode (normally, the color changes accordingly to the `dark` parameter)
 * @param {string} a11yLabel `common MoBrix-ui prop` - if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label aria-label}
 * @param {() => void} onFocus `common MoBrix-ui prop` - callback called when component is focused
 * @param {() => void} onFocusLost `common MoBrix-ui prop` - callback called when component focus is lost
 * @param {(keyEvent: any) => void} onKeyDown `common MoBrix-ui prop` - callback called when a key is pressed when inside the component
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
 * @copyright 2023 Cataldo Cianciaruso
 */
const Review: ReviewComponent = ({
  user,
  description,
  rate,
  max,
  icon,
  url,
  logo,
  rateType,
  additionalProps,
  ...commonProps
}) =>
  buildMbxStandardComponent(commonProps, (props) => ({
    name: "review",
    commonProps: props,
    additionalProps,
    Component: reviewComponent({
      user,
      description,
      rate,
      max,
      icon,
      url,
      logo,
      rateType,
      ...props,
    }),
  }));

export default Review;
