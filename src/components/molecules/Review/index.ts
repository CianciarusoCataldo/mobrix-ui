import "./styles.css";

import { ReviewComponent } from "../../../types";

import { buildMbxStandardComponent } from "../../../tools";

import reviewComponent from "./component";

/**
 * A smart review container, useful to show reviews on your web app with custom data inside. Optionally, an external link can be set to redirect user to the platform where the review is located
 *
 * @param {string} user Username displayed above the review description, at the right of the icon
 * @param {string} description Review description displayed below the review username, at the top of the rate
 * @param {JSX.Element} icon Icon showed inside the component
 * @param {string} url Review external url. If set, an icon will be showed at the top right of the review
 * @param {'default' | 'link' | 'facebook' | 'twitter' | 'google' | 'linkedin' | 'github'} logo Social icon type, showed at the top right of the container. Supports popular web services like Facebook, Twitter, Google and so on. Proviced icon list will grow up time by time and will be updated with the latest web services, to keep it usable for the future.
 * @param {number} max max vote (max number of icons displayed) - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Rater Rater}
 * @param {boolean} vertical if `true`, rate icons will be showed vertically - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Rater Rater}
 * @param {number} rate actual vote - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Rater Rater}
 * @param {'star'|'circle'} rateType vote icons type - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Rater Rater}
 * @param {string} key - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - React key, the standard [key parameter](https://reactjs.org/docs/lists-and-keys.html)
 * @param {string} className - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - custom className applied on main container
 * @param {boolean} dark - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable dark mode
 * @param {boolean} hide - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Hide/show component
 * @param {string} id - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - [id parameter](https://www.w3schools.com/html/html_id.asp) (for styling/testing purpose, to easily find the component into the DOM)
 * @param {boolean} shadow - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable shadow behind component
 * @param {CSSProperties} style - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Css inline properties applied on main container
 * @param {boolean} unstyled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons)
 * @param {boolean} animated - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component animations
 * @param {boolean} background - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component background
 * @param {boolean} hover - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component hover standard styles
 * @param {boolean} disabled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If true, disable the component. The effect may vary depending on the component type
 * @param {Record<string, any>} additionalProps - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom additional properties, applied to the component
 *
 *
 *
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Review
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since 1.1.0
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
const Review: ReviewComponent = (props) =>
  buildMbxStandardComponent(props, (sharedProps) => ({
    name: "review",
    commonProps: sharedProps,
    Component: reviewComponent({
      ...props,
      ...sharedProps,
    }),
  }));

export default Review;
