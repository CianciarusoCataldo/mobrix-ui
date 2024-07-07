import React from "react";
import { buildMbxStandardComponent } from "../../src/tools";
import { MbxUiProps } from "../../src";
import { mount } from "enzyme";

export default () =>
  describe("MoBrix-ui component building", () => {
    const Component = (props: MbxUiProps) =>
      buildMbxStandardComponent(props, (sharedProps) => ({
        name: "test-mbx-component",
        features: { opAct: true, fillFc: true },
      }));

    const Wrapper = mount(<Component animated animation="fade-in" />);
    expect(Wrapper);
  });
