import React from "react";
import { mount } from "enzyme";
import { Input } from "../../../src";

const inputTest = () => {
  describe("Input", () => {
    test("rendering test", () => {
      const wrapper = mount(<Input />);
      wrapper.find("input").simulate("change", "new test text");
      expect(wrapper);
    });
    test("Writing text trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      const wrapper = mount(<Input value="test" onChange={onChangeStub} />);
      wrapper.find("input").simulate("change", "new test text");
      expect(onChangeStub).toBeCalled;
    });

    test("Writing text doesn't trigger the onChange callback if readOnly === true", () => {
      const onChangeStub = jest.fn();
      const wrapper = mount(
        <Input value="test" onChange={onChangeStub} readOnly />
      );
      wrapper.find("input").simulate("change", "new test text");
      expect(onChangeStub).not.toBeCalled;
    });

    test("When new value from onChange event is undefined, empty string is passed to onChange callback", () => {
      const onChangeStub = jest.fn();
      const wrapper = mount(<Input onChange={onChangeStub} />);
      wrapper.find("input").simulate("change", undefined);
      expect(onChangeStub).toBeCalledWith("");
    });
  });
};

export default inputTest;
