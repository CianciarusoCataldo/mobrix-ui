import "./styles.css";

import { ExpandableContainerComponent } from "../../../types";

import expandableContainerComponent from "./component";
import { buildMbxReactiveComponent } from "../../../tools";

/**
 * An exapandable container, to hide/show some content on demand.
 *
 * @param {any} children content to render inside Container - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Container Container}
 * @param {'div' | 'header' | 'footer'} wrapper component wrapper type - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Container Container}
 * @param {boolean} expanded Extra content showed only when container is expanded (`compact` === `true`)
 * @param {boolean} compact if true, shows the whole container content
 * @param {(newValue: boolean) => void} onChange Callback triggered when ExpandableContainer component input value is changed by the user
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
 * @see https://cianciarusocataldo.github.io/mobrix-ui/molecules/ExpandableContainer
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since 1.0.0
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
const ExpandableContainer: ExpandableContainerComponent = ({
  expanded,
  compact: startCompact,
  children,
  wrapper,
  onChange,
  additionalProps,
  ...commonProps
}) => {
  return buildMbxReactiveComponent(commonProps, (props) => ({
    name: "expandable-container",
    defaultValue: false,
    commonProps: props,
    wrapper,
    inputValue: startCompact,
    additionalProps,
    Component: ({ value, setValue }) =>
      expandableContainerComponent({
        value,
        setValue,
        expanded,
        children,
        onChange,
        ...props,
      }),
    props: (value, setValue) => ({
      additionalProps: {
        "data-mbx-compact": value,
      },
    }),
  }));
};

export default ExpandableContainer;
