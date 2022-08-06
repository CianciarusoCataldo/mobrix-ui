import React from "react";

import "./styles.css";
import { ListComponent } from "./types";

import { buildComponent } from "../../../utils";

/**
 * A custom bullet list, that support any type of elements (types can vary from element to element)
 *
 * @since 1.0.0
 *
 * @param {ListProps["elements"]} elements list elements (if unstyled == `false`, every element will include a dot at its start)
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Link usage</caption>
 * import { render } from "react-dom";
 * import { List } from 'mobrix-ui';
 *
 * render(<List elements={["element 1", "element 2"]} />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/List
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const List: ListComponent = ({ elements: inputElements, ...commonProps }) => {
  const elements = inputElements || [];
  return buildComponent({
    name: "mobrix-ui-list",
    Component: elements.map((element, index) => {
      return (
        <div className="element" key={`element_${index}`}>
          {!commonProps.unstyled && (
            <svg viewBox="0 0 9 9" className="dot">
              <circle cx={4.5} cy={4.5} r={3.5} />
            </svg>
          )}
          {element}
        </div>
      );
    }),
    commonProps,
  });
};

export default List;
