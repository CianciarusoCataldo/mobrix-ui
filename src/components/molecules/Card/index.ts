import "./styles.css";

import { CardComponent } from "../../../types";

import { buildMobrixUiReactiveComponent } from "../../../utils";

import cardComponent from "./component";

/**
 * A Card component. Its UI depends on given parameters (header, body and footer)
 *
 * @since 1.0.0
 *
 * @param {JSX.Element | Element} icon A custom icon showed before the Card header
 * @param {JSX.Element | Element | string} header Card header content
 * @param {JSX.Element | Element | string} body Card body content
 * @param {JSX.Element | Element | string} footer Card footer content
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
 * @example <caption>Example Card usage</caption>
 * import { render } from "react-dom";
 * import { Card } from 'mobrix-ui';
 *
 * render(<Card header="Example header" body="Example body" footer="Example footer" />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
const Card: CardComponent = ({
  icon,
  header,
  body,
  footer,
  children,
  dismissable,
  onClose,
  hide,
  ...commonProps
}) => {
  return buildMobrixUiReactiveComponent({
    name: "card",
    props: (value, setValue) => {
      return {
        commonProps: { ...commonProps, hide: value },
        Component: cardComponent({
          header,
          dismissable,
          icon,
          body,
          value,
          onClose,
          setValue,
          children,
          footer,
          dark: commonProps.dark,
        }),
      };
    },
    defaultValue: false,
    inputValue: hide,
  });
};

export default Card;
