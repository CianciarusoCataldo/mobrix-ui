import React from "react";
import { mount } from "enzyme";
import { RadioButtonGroup } from "../../../src";

const radioButtonGroupTest = () => {
  describe("RadioButtonGroup", () => {
    test("Rendering test", () => {
      let wrapper = mount(<RadioButtonGroup />);
      expect(wrapper);
      wrapper = mount(
        <RadioButtonGroup buttons={[{ text: "Test radio button" }]} />
      );
      wrapper.find('[data-mobrix-ui-test="radio_component_0"]').simulate("click");
      expect(wrapper);
    });

    test("Clicking on a radio button trigger the onChange callback with the button index as a parameter", () => {
      const onChangeStub = jest.fn();
      const wrapper = mount(
        <RadioButtonGroup
          onChange={onChangeStub}
          buttons={[
            { text: "Test radio button 1" },
            { text: "Test radio button 2" },
          ]}
        />
      );
      wrapper.find('[data-mobrix-ui-test="radio_component_0"]').simulate("click");
      expect(onChangeStub).toBeCalledWith(0);
    });
  });
};

export default radioButtonGroupTest;
