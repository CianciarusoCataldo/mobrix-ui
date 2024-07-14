import React from "react";
import { mount } from "enzyme";
import { Toggle } from "../../../src";

const toggleTest = () => {
  describe("Toggle", () => {
    test("Rendering test", () => {
      let wrapper = mount(<Toggle />);
      wrapper.find('[data-mbx-id="tgl"]').simulate("click");
      expect(wrapper);
      wrapper = mount(<Toggle disabled />);
      expect(wrapper);
    });

    test("Clicking on the toggle switch its status and trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      let wrapper = mount(
        <Toggle
          props={{ "data-mbx-test-class": "test" }}
          onChange={onChangeStub}
        />
      );
      wrapper.find('[data-mbx-id="tgl"]').simulate("click");
      expect(onChangeStub).toBeCalled;
    });

    test("Pressing Enter key trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      let wrapper = mount(
        <Toggle icon={<div />} onChange={onChangeStub} onKeyDown={() => {}} />
      );

      wrapper
        .find('[data-mbx-id="tgl"]')
        .simulate("keyDown", { keyCode: 13, code: "Enter" });

      expect(onChangeStub).toBeCalled;
    });
  });
};

export default toggleTest;
