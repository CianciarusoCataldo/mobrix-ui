import React from "react";
import { mount } from "enzyme";
import { CheckBox } from "../../../src";

const checkBoxTest = () => {
  describe("CheckBox", () => {
    test("Clicking on the checkbox trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      const wrapper = mount(<CheckBox onChange={onChangeStub} />);
      wrapper.find('div[id^="mobrix-ui"]').simulate("click");
      wrapper
      .find('div[id^="mobrix-ui"]')
      .simulate("keyDown", { keyCode: 13, code: "Alt" });
      expect(onChangeStub).toBeCalledWith(true);
    });

    test("Pressing Enter or Space key trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      let wrapper = mount(<CheckBox onKeyDown={() => {}} />);

      wrapper
        .find('div[id^="mobrix-ui"]')
        .simulate("keyDown", { keyCode: 13, code: "Enter" });

      expect(onChangeStub).toBeCalled;

      onChangeStub.mockReset();
      wrapper
        .find('div[id^="mobrix-ui"]')
        .simulate("keyDown", { keyCode: 13, code: "Space" });

      expect(onChangeStub).toBeCalled;
    });
  });
};

export default checkBoxTest;
