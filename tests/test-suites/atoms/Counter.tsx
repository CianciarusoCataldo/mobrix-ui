import React from "react";
import { mount } from "enzyme";
import { Counter } from "../../../src";

const counterTest = () => {
  describe("Counter", () => {
    test("Clicking on the button trigger the onClick callback", () => {
      const onChangeStub = jest.fn();
      const wrapper = mount(<Counter value={12} onChange={onChangeStub} />);
      wrapper.find("input").simulate("change", 32);
      expect(onChangeStub).toBeCalled;
    });
  });
};

export default counterTest;
