import React from "react";
import { mount } from "enzyme";
import { Password } from "../../../src";

const PasswordTest = () => {
  describe("Password", () => {
    test("rendering test", () => {
      let wrapper = mount(<Password />);
      wrapper.find("input").simulate("change", "new test text");
      expect(wrapper);
      wrapper = mount(<Password active show autoresizable value="test" />);
      wrapper.find(`[data-mbx-id="icb"]`).simulate("click");
    });
  });
};

export default PasswordTest;
