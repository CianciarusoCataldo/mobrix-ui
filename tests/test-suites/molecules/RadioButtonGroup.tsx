import React from "react";
import { mount } from "enzyme";
import { RadioButtonGroup } from "../../../src";

const radioButtonGroupTest = () => {
  describe("RadioButtonGroup", () => {
    test("Rendering test", () => {
      let wrapper = mount(<RadioButtonGroup />);
      expect(wrapper);
      wrapper = mount(
        <RadioButtonGroup
          horizontal
          props={{ "data-mbx-test-class": "test" }}
          elementClassName="test"
          radioProps={{}}
          defaultPosition="right"
          buttons={[{ text: "Test radio button" }]}
        />
      );
      wrapper.find('[data-mbx-id="radio"]').at(0).simulate("click");
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
      wrapper.find('[data-mbx-id="radio"]').at(0).simulate("click");
      expect(onChangeStub).toBeCalledWith(0);
    });
  });
};

export default radioButtonGroupTest;
