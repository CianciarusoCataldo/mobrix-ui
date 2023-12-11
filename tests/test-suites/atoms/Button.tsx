import React from "react";
import { mount } from "enzyme";
import { Button } from "../../../src";

const buttonTest = () => {
  describe("Button", () => {
    test("Clicking on the button triggers the onClick callback", () => {
      const onClickStub = jest.fn();
      const wrapper = mount(<Button onClick={onClickStub}>Test button</Button>);
      wrapper.find("button").simulate("click");
      expect(onClickStub).toBeCalled;
    });

    test("Clicking on the button not triggers the onClick callback if the button is disabled", () => {
      const onClickStub = jest.fn();
      const wrapper = mount(
        <Button onClick={onClickStub} disabled className="test-button">Test disabled button</Button>
      );
      wrapper.find("button").simulate("click");
      expect(onClickStub).not.toBeCalled;
    });
  });
};

export default buttonTest;
