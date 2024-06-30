import React from "react";
import { mount } from "enzyme";
import { Label } from "../../../src";

const labelTest = () => {
  describe("Label", () => {
    test("Rendering test", () => {
      let wrapper = mount(<Label />);
      expect(wrapper);
      wrapper = mount(<Label shadow>Test label</Label>);
      expect(wrapper);
    });
  });
};

export default labelTest;
