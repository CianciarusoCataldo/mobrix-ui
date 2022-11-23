import "./styles.css";

import { ModalComponent } from "./types";

import { buildMobrixUiStandardComponent } from "../../../utils";

import modalComponent from "./component";

/**
 * A light Modal component. Can be totally customized (the overlay too, through `overlayClassName` parameter)
 * and can be driven with redux-state or internal state parameters.
 *
 * @since 1.0.0
 *
 * @param {JSX.Element | Element} children Modal Content
 * @param {()=>void} onClose Callback triggered when modal is closed
 * @param {string} title Modal title
 * @param {string} overlayClassName A custom className applied on the Modal overlay container
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
 *@example <caption>Example Modal usage</caption>
 *import { render } from "react-dom";
 *import { Modal } from 'mobrix-ui';
 *
 * render(<Modal><div>Example modal content</div></Modal>, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Modal
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Modal: ModalComponent = ({
  children,
  onClose,
  title,
  className = "",
  overlayClassName = "",
  ...commonProps
}) =>
  buildMobrixUiStandardComponent({
    name: "mobrix-ui-modal",
    Component: modalComponent({
      children,
      className,
      title,
      onClose,
      ...commonProps,
    }),
    commonProps: { ...commonProps, className: overlayClassName },
  });

export default Modal;
