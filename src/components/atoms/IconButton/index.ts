import "./styles.css";

import { IconButtonComponent } from "../../../types/components/atoms/icon-button";
import { buildMbxStandardComponent } from "../../../tools/utils";

/**
 * An empty button, without additional styles, to make an icon clickable
 *
 * @param {JSX.Element | string} children Button content - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Button Button}
 * @param {() => void} onMouseEnter This callback is triggered everytime the cursor enter the button area - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Button Button}
 * @param {() => void} onMouseLeave This callback is triggered everytime the cursor exit the button area - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Button Button}
 * @param {() => void} onClick Callback triggered when Button component is clicked - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Button Button}
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
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/IconButton
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since 3.0.0
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
const IconButton: IconButtonComponent = ({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  additionalProps = {},
  ...commonProps
}) =>
  buildMbxStandardComponent(commonProps, (props) => ({
    name: "icon-button",
    wrapper: "button",
    additionalProps: {
      ...additionalProps,
      ...(!props.disabled && {
        onClick,
        onMouseEnter,
        onMouseLeave,
      }),
    },
    Component: children,
    commonProps: { ...props, shadow: false },
  }));

export default IconButton;
