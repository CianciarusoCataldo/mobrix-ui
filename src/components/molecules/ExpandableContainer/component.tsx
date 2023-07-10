import React from "react";

import classNames from "classnames";

import {
  ExpandableContainerProps,
  MobrixUiReactiveComponent,
} from "../../../types";

import Button from "../../atoms/Button";

const expandableContainerComponent: MobrixUiReactiveComponent<
  boolean,
  ExpandableContainerProps
> = ({
  value: compact,
  setValue: setCompact,
  children,
  expanded,
  dark,
  onChange = () => {},
}) => {
  let components = [children];

  !compact && expanded && components.push(expanded);
  components.push(
    <Button
      unstyled
      onClick={() => {
        onChange(!compact);
        setCompact(!compact);
      }}
      id="expandable_container_arrow_button"
      className="expandable-container-arrow-button"
      key="arrow_button"
      dark={dark}
    >
      <svg
        className={classNames("arrow", {
          down: compact,
          up: !compact,
          dark: dark,
        })}
        tabIndex={0}
        width="1.5rem"
        fillRule="evenodd"
        viewBox="0 0 512 319.24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m5.9 270.28 43.07 43.07c7.86 7.86 20.73 7.84 28.56 0l178.48-178.48L434.5 313.35c7.86 7.86 20.74 7.82 28.56 0l43.07-43.07c7.83-7.84 7.83-20.72 0-28.56L313.72 49.32l-.36-.37-43.07-43.07c-7.83-7.82-20.7-7.86-28.56 0l-43.07 43.07-.36.37L5.9 241.72c-7.87 7.86-7.87 20.7 0 28.56z" />
      </svg>
    </Button>
  );
  return components;
};

export default expandableContainerComponent;
