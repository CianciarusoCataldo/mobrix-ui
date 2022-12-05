import React from "react";
import { mount } from "enzyme";
import { Slider } from "../../../src";

const sliderTest = () => {
  describe("Slider", () => {
    test("Rendering test", () => {
      const wrapper = mount(<Slider thumbColor="#FFFFF" value={12} />);
      wrapper.find("input").simulate("change", 32);
      wrapper.find("input").simulate("input", 22);
      expect(wrapper);
    });

    test("Clicking on the button trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      const wrapper = mount(<Slider value={12} onChange={onChangeStub} />);
      wrapper.find("input").simulate("change", 32);
      expect(onChangeStub).toBeCalled;
    });
  });
};

export default sliderTest;
