import React from "react";
import { mount } from "enzyme";
import { FacebookButtons } from "../../../src";

const facebookButtonsTest = () => {
  describe("FacebookButtons", () => {
    test("Rendering test", () => {
      let wrapper = mount(<FacebookButtons pageId="facebook" />);
      expect(wrapper);
      wrapper = mount(<FacebookButtons pageId="facebook" small share />);
      expect(wrapper);
    });
  });
};

export default facebookButtonsTest;
