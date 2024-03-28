import "./styles.css";

import { DismissableCardComponent } from "../../../types";

import { buildMbxReactiveComponent } from "../../../tools";

import dismissableCardInternalComponent from "./component";

/**
 * A standard Card with a dismiss function
 *
 * @param {() => void} onClose Callback triggered when the X icon is clicked
 * @param {boolean} alwaysVisible If `true`, the DismissableCard won't disappear if the X icon is clicked (can be hidden with `hide` shared prop)
 * @param {JSX.Element | string} header Card header content - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card Card}
 * @param {JSX.Element | string} body Card body content - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card Card}
 * @param {JSX.Element | string} footer Card footer content - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card Card}
 * @param {boolean} noDivider If `true`, hide all dividers - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card Card}
 * @param {boolean} noTopDivider If `true`, hide the top divider, between header and body - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card Card}
 * @param {boolean} noBottomDivider If `true`, hide the top divider, between body and footer - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card Card}
 * @param {`JSX.Element` | `string`} children Card content - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card Card}
 * @param {string} headerClassName Custom classname applied on the Card header - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card Card}
 * @param {string} bodyClassName Custom classname applied on the Card body - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card Card}
 * @param {string} footerClassName Custom classname applied on the Card footer - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card Card}
 * @param {Record<string, any>} headerProps Custom props applied on the Card header - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card Card}
 * @param {Record<string, any>} bodyProps Custom props applied on the Card body - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card Card}
 * @param {Record<string, any>} footerProps Custom props applied on the Card footer - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card Card}
 * @param {string} key - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - React key, the standard [key parameter](https://reactjs.org/docs/lists-and-keys.html)
 * @param {string} className - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - custom className applied on main container
 * @param {boolean} dark - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable dark mode
 * @param {boolean} hide - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Hide/show component
 * @param {string} id - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - [id parameter](https://www.w3schools.com/html/html_id.asp) (for styling/testing purpose, to easily find the component into the DOM)
 * @param {boolean} shadow - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable shadow behind component
 * @param {CSSProperties} style - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Css inline properties applied on main container
 * @param {boolean} unstyled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons)
 * @param {boolean} animated - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component animations
 * @param {'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-top' | 'shake'} animation - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `animated`=`true`, this parameter specifies which animation is used when component is rendered
 * @param {boolean} background - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component background
 * @param {boolean} hover - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component hover standard styles
 * @param {boolean} disabled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If true, disable the component. The effect may vary depending on the component type
 * @param {Record<string, any>} additionalProps - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom additional properties, applied to the component
 *
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/DismissableCard
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since 3.0.0
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
const DismissableCard: DismissableCardComponent = ({
  /* istanbul ignore next */
  onClose = () => {},
  alwaysVisible,
  ...props
}) =>
  buildMbxReactiveComponent(props, (sharedProps) => ({
    name: "dismissable-card",
    inputValue: sharedProps.hide,
    defaultValue: false,
    Component: ({ value, setValue }) =>
      dismissableCardInternalComponent({
        ...props,
        ...sharedProps,
        alwaysVisible,
        onClose: () => {
          onClose();
          !alwaysVisible && setValue(true);
        },
      }),
    props: (value, setValue) => ({
      commonProps: {
        ...sharedProps,
        hide: alwaysVisible ? sharedProps.hide : value,
      },
    }),
  }));

export default DismissableCard;
