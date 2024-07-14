import React from "react";

import {
  ExpandableContainerProps,
  MbxUiReactiveComponent,
} from "../../../types";

import IconButton from "../../atoms/IconButton";
import { ArrowIcon } from "../../../icons";

const expandableContainerComponent: MbxUiReactiveComponent<
  boolean,
  ExpandableContainerProps
> = ({
  value: compact,
  setValue: setCompact,
  children,
  expanded,
  dark,
  onChange = () => {},
  disabled,
  hover,
}) => {
  let components = [children];

  components.push(
    <div key="exp_a" data-mbx-cls="exp-area" data-mbx-scl="ovhid">
      {expanded}
    </div>,
  );
  components.push(
    <IconButton
      hover={hover}
      disabled={disabled}
      onClick={() => {
        onChange(!compact);
        setCompact(!compact);
      }}
      key="arr_bt"
      dark={dark}
      scl="mauto;flxc"
      mbxClass="econ-b"
      features={{ noShFc: true, fillFc: true }}
    >
      <ArrowIcon scl="nout" fill="var(--mbx-c-con-txt)" />
    </IconButton>,
  );
  return components;
};

export default expandableContainerComponent;
