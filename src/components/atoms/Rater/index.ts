import "./styles.css";

import classnames from "classnames";
import { RaterComponent } from "../../../types";

import { buildMobrixUiReactiveComponent } from "../../../tools";

import raterComponent from "./component";

/**
 * A vote manager component, really useful to let the user leave a review
 *
 * @since 1.0.0
 *
 * @param {number} value actual vote
 * @param {number} max max vote (max number of icons showed)
 * @param {boolean} readonly if true, the rate can't be changed by clicking on the icons
 * @param {"star"|"circle"} type vote icons type
 * @param {boolean} vertical if true, rate icons will be showed vertically (default `false` - `horizontal`)
 * @param {(newVote:number)=>void} onChange callback triggered when user select a vote
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
 * @example <caption>Example Rater usage</caption>
 * import { render } from "react-dom";
 * import { Rater } from 'mobrix-ui';
 *
 * render(<Rater type="circle" value={3} />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Rater
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
const Rater: RaterComponent = ({
  value: inputValue,
  type,
  max,
  readonly,
  onChange,
  value,
  vertical,
  ...commonProps
}) =>
  buildMobrixUiReactiveComponent<number>({
    name: "rater",
    inputValue,
    defaultValue: 0,
    Component: ({ value, setValue }) =>
      raterComponent({
        type,
        max,
        readonly,
        onChange,
        value,
        setValue,
      }),
    commonProps: {
      ...commonProps,
      className: classnames(commonProps.className, {
        vertical: vertical,
        horizontal: !vertical,
      }),
    },
  });

export default Rater;
