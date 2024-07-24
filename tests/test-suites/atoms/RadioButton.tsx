import React from "react";
import { mount } from "enzyme";
import { RadioButton } from "../../../src";

const radioButtonTest = () => {
  describe("RadioButton", () => {
    test("Rendering test", () => {
      let wrapper = mount(<RadioButton active />);
      expect(wrapper);
    });

    test("Clicking on the radio button trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      const wrapper = mount(<RadioButton onChange={onChangeStub} />);
      wrapper.find('[data-mbx-id="rd"]').simulate("click");
      wrapper
        .find('[data-mbx-id="rd"]')
        .simulate("keyDown", { keyCode: 13, code: "Alt" });
      expect(onChangeStub).toBeCalledWith(true);
    });

    test("Clicking on the radio button doesn't trigger the onChange callback, if the rdio button is already selected and deselectable === false", () => {
      const onChangeStub = jest.fn();
      const wrapper = mount(
        <RadioButton
          value={true}
          deselectable={false}
          onChange={onChangeStub}
        />
      );
      wrapper
        .find('[data-mbx-id="rd"]')
        .simulate("keyDown", { keyCode: 13, code: "Enter" });
      expect(onChangeStub).not.toBeCalled;
    });

    test("Pressing Enter key trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      const wrapper = mount(<RadioButton onKeyDown={() => {}} />);

      wrapper
        .find('[data-mbx-id="rd"]')
        .simulate("keyDown", { keyCode: 13, code: "Enter" });

      expect(onChangeStub).toBeCalled;
    });
  });
};

export default radioButtonTest;
