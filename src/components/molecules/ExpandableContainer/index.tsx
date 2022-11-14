import "./styles.css";

import React from "react";

import { ExpandableContainerComponent } from "./types";

import classNames from "classnames";
import { withMobrixUiValue } from "../../../utils";

import Button from "../../atoms/Button";

/**
 * An exapandable container, to hide/show some content on demand.
 *
 * @since 1.0.0
 *
 * @param wrapper component type. The Container component can wrap a content inside different components (by now, )
 * @param children content to render inside Container
 * @param animated if `true`, the Container will be showed with a fade-in effect
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Container usage</caption>
 * import { render } from "react-dom";
 * import { ExpandableContainer } from 'mobrix-ui';
 *
 * render(
 * <ExpandableContainer animated dark expanded={<p>Expanded area</p>}>
 * Example content
 * </ExpandableContainer>,
 * document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Container
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const ExpandableContainer: ExpandableContainerComponent = ({
  expanded,
  compact: startCompact,
  children,
  animated,
  wrapper,
  ...commonProps
}) => {
  return withMobrixUiValue({
    name: "mobrix-ui-expandable-container",
    defaultValue: false,
    commonProps,
    animated,
    wrapper,
    props: (compact, setCompact) => {
      let components: JSX.Element[] = [children];

      !compact && expanded && components.push(expanded);
      components.push(
        <Button
          unstyled
          onClick={() => setCompact(!compact)}
          id="arrow_button"
          className="expandable-container-arrow-button"
        >
          <svg
            className={classNames("arrow", {
              down: compact,
              up: !compact,
              dark: commonProps.dark,
            })}
            width="1.5rem"
            fillRule="evenodd"
            viewBox="0 0 512 319.24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m5.9 270.28 43.07 43.07c7.86 7.86 20.73 7.84 28.56 0l178.48-178.48L434.5 313.35c7.86 7.86 20.74 7.82 28.56 0l43.07-43.07c7.83-7.84 7.83-20.72 0-28.56L313.72 49.32l-.36-.37-43.07-43.07c-7.83-7.82-20.7-7.86-28.56 0l-43.07 43.07-.36.37L5.9 241.72c-7.87 7.86-7.87 20.7 0 28.56z" />
          </svg>
        </Button>
      );
      return {
        Component: components,
      };
    },
  });
};

export default ExpandableContainer;
