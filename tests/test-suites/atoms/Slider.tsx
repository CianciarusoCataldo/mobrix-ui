import React from "react";
import { mount } from "enzyme";
import { Slider } from "../../../src";

const sliderTest = () => {
  describe("Slider", () => {
    test("Rendering test", () => {
      const wrapper = mount(
        <Slider
          value={12}
          additionalProps={{
            "data-mbx-test-class": "test",
          }}
        />
      );
      wrapper.find("input").simulate("change", 32);
      wrapper.find("input").simulate("input", 22);
      expect(wrapper);
    });

    test("onChange callback is not triggered when Slider is disabled or in readOnly mode", () => {
      const onChangeStub = jest.fn();
      let wrapper = mount(
        <Slider disabled value={12} onChange={onChangeStub} />
      );
      wrapper.find("input").simulate("change", 32);
      wrapper.find("input").simulate("input", 22);
      expect(onChangeStub).not.toBeCalled;
      wrapper = mount(<Slider readOnly value={12} onChange={onChangeStub} />);
      wrapper.find("input").simulate("change", 32);
      wrapper.find("input").simulate("input", 22);

      expect(onChangeStub).not.toBeCalled;
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
