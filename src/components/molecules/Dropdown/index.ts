import "./styles.css";

import { DropdownComponent } from "../../../types";

import { buildMobrixUiReactiveComponent } from "../../../tools";

import dropdownComponentBuilder from "./builder";

/**
 * Show a list of elements in a dropdown menu (with fade-in and out effects).
 * Can be easily customized and every element style and behaviour (with a callback) can
 * be customized too.
 *
 * @since 1.0.0
 *
 * @param {number} value actual selected element (as index). If not set, default value (0) will be used.
 * @param {{ name: string; icon?: JSX.Element }[]} content Dropdown content elements
 * @param {boolean} hideArrow Show/hide arrow icon near selected element
 * @param {(index:number)=>void} onChange calllback triggered when selecting new element from dropdown
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
 *@example <caption>Example Dropdown usage</caption>
 *import { render } from "react-dom";
 *import { Dropdown } from 'mobrix-ui';
 *
 * render(<Dropdown content={[{ name:"Element 0" }]} />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Dropdown
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
const Dropdown: DropdownComponent = ({
  elements,
  onChange,
  value: inputValue,
  hideArrow,
  ...commonProps
}) =>
  buildMobrixUiReactiveComponent({
    name: "dropdown",
    defaultValue: 0,
    inputValue,
    props: (value, setValue) =>
      dropdownComponentBuilder({
        elements,
        onChange,
        value,
        hideArrow,
        dark: commonProps.dark,
        setValue,
        shadow: commonProps.shadow,
        a11yDark: commonProps.a11yDark,
        ...commonProps,
      }),
  });

export default Dropdown;
