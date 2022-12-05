import React from "react";
import { mount } from "enzyme";
import { Divider } from "../../../src";

const dividerTest = () => {
  describe("Divider", () => {
    test("Rendering test", () => {
      const wrapper = mount(<Divider />);
      expect(wrapper);
    });
  });
};

export default dividerTest;
