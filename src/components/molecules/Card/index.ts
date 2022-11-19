import "./styles.css";

import { CardComponent } from "./types";

import { withMobrixUiValue } from "../../../utils";

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
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
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
 * @copyright 2022 Cataldo Cianciaruso
 */
const Card: CardComponent = ({
  icon,
  header,
  body,
  footer,
  children,
  dismissable,
  onClick,
  hide,
  ...commonProps
}) => {
  return withMobrixUiValue({
    name: "mobrix-ui-card",
    props: (value, setValue) => {
      return {
        commonProps: { ...commonProps, hide: value },
        Component: cardComponent({
          header,
          dismissable,
          icon,
          body,
          value,
          onClick,
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
