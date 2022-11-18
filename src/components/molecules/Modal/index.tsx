import "./styles.css";

import React from "react";

import { ModalComponent } from "./types";

import { buildComponent } from "../../../utils";

import Button from "../../atoms/Button";
import { xIcon } from "../Card/icons";
import Container from "../Container";
import Card from "../Card";

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
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
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
  buildComponent({
    name: "mobrix-ui-modal",
    Component: (
      <div className="modal-window">
        {commonProps.unstyled ? (
          children
        ) : (
          <Card
            className={"content " + className}
            dark={commonProps.dark}
            unstyled={commonProps.unstyled}
            onClick={onClose}
            body={children}
            dismissable
            header={title}
            hide={commonProps.hide}
          />
        )}
      </div>
    ),
    commonProps: { ...commonProps, className: overlayClassName },
  });

export default Modal;
