import React from "react";
import { mount } from "enzyme";
import { FileChooser } from "../../../src";

const fileChooserTest = () => {
  describe("FileChooser", () => {
    test("Rendering test", () => {
      let wrapper = mount(<FileChooser />);
      wrapper.find("[data-mbx-id='btn']").simulate("click");
      wrapper.simulate("keyDown", { code: "Enter" });
      expect(wrapper);
      wrapper = mount(<FileChooser onChange={jest.fn()} namePosition="left" />);
    });
  });
};

export default fileChooserTest;
