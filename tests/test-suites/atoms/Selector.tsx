import React from "react";
import { mount } from "enzyme";
import { Selector } from "../../../src";

const selectorTest = () => {
  describe("Selector", () => {
    test("Rendering test", () => {
      let wrapper = mount(<Selector />);
      wrapper.find("select").simulate("change", { value: 1 });
      expect(wrapper);
    });

    test("Clicking an element trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      const wrapper = mount(
        <Selector
          onChange={onChangeStub}
          elements={["test element 1", "test element 2"]}
        />
      );
      wrapper.find("select").simulate("change", { value: 1 });
      expect(onChangeStub).toBeCalled;
    });
  });
};

export default selectorTest;
