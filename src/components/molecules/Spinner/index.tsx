import "./styles.css";
import React from "react";

import { SpinnerComponent } from "./types";

import DEFAULT_ICONS from "./icons";

import { buildBoxComponent } from "../../../utils";

import Container from "../Container";

/**
 * A smart status indicator, optionally with custom images showed for every state (defaults are `loading`,`success` and `error`)
 *
 * @since 1.0.0
 *
 * @param {number} value Spinner status
 * @param {JSX.Element | string} label `common MoBrix-ui prop` - Component top label
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Dropdown usage</caption>
 *
 * import { render } from "react-dom";
 * import { Spinner } from 'mobrix-ui';
 *
 * render(<Spinner value="error" />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Spinner
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Spinner: SpinnerComponent = ({
  value,
  label,
  statuses,
  ...commonProps
}) => {
  return buildBoxComponent({
    label,
    value,
    defaultValue: "loading",
    callBack: (value, setValue) => {
      const ICONS = statuses || DEFAULT_ICONS;
      const StatusIcon = () => (
        <Container unstyled animated>
          {value && ICONS[value] ? ICONS[value] : ICONS.loading}
        </Container>
      );

      return {
        commonProps,
        Component: (
          <Container unstyled animated>
            <StatusIcon />
          </Container>
        ),
        name: "mobrix-ui-spinner",
      };
    },
  });
};

export default Spinner;
