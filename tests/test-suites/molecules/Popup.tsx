import React from "react";
import { mount } from "enzyme";
import { Popup } from "../../../src";

const popupTest = () => {
  describe("Popup", () => {
    test("Rendering test", () => {
      let wrapper = mount(<Popup hide>Hidden test popup component</Popup>);
      expect(wrapper);
      wrapper = mount(<Popup>Test popup component</Popup>);
      expect(wrapper);
    });
  });
};

export default popupTest;
