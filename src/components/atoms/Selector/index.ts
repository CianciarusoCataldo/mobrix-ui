import "./styles.css";

import { SelectorComponent } from "./types";

import { buildMobrixUiReactiveComponent } from "../../../utils";

import selectorComponent from "./component";

/**
 * A re-defined `select` component.
 *
 * @since 2.0.0
 *
 * @param {number|undefined} value option index actually showed
 * @param {string[]} elements selector options
 * @param {(index:number)=>void} onChange callback triggered when the button is clicked
 * @param {string} className `common MoBrix-ui prop` - custom className
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component, enabling or not MoBrix-ui custom styles
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component
 * @param {boolean} animated `common MoBrix-ui prop` enable/disable component animations
 * @param {string} key `common MoBrix-ui prop` custom component React key (the standard {@link https://reactjs.org/docs/lists-and-keys.html key parameter})
 * @param {boolean} a11y `common MoBrix-ui prop` enable/disable accessibility features
 * @param {boolean} a11yDark `common MoBrix-ui prop` if the `a11y` parameter is `true`, override standard focus color style with/without dark mode (normally, the color changes accordingly to the `dark` parameter)
 * @param {string} a11yLabel `common MoBrix-ui prop` if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label aria-label}
 *
 * @example <caption>Example Selector usage</caption>
 * import { render } from "react-dom";
 * import { Selector } from 'mobrix-ui';
 *
 * render(<Selector animated elements={["Element 1", "Element 2"]} />
 *            Example button
 *        </Button>, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Selector
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Selector: SelectorComponent = ({
  elements,
  value: inputValue,
  onChange = (_) => {},
  ...commonProps
}) =>
  buildMobrixUiReactiveComponent<number | undefined>({
    wrapper: "select",
    name: "mobrix-ui-selector",
    defaultValue: undefined,
    inputValue,
    commonProps,
    props: (value, setValue) => ({
      additionalProps: {
        value,
        onChange: (e) => {
          onChange(e.target.value);
          setValue(e.target.value);
        },
      },
    }),
    render: (value, setValue) =>
      selectorComponent({ elements, value, setValue }),
  });

export default Selector;
