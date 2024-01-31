import React from "react";
import { mount } from "enzyme";
import { IconButton } from "../../../src";

const buttonTest = () => {
  describe("IconButton", () => {
    test("Clicking on the button triggers the onClick callback", () => {
      const onClickStub = jest.fn();
      const wrapper = mount(
        <IconButton onClick={onClickStub}>Test button</IconButton>
      );
      wrapper.find("button").simulate("click");
      expect(onClickStub).toBeCalled;
    });

    test("Clicking on the button not triggers the onClick callback if the button is disabled", () => {
      const onClickStub = jest.fn();
      const wrapper = mount(
        <IconButton onClick={onClickStub} disabled className="test-button">
          Test disabled button
        </IconButton>
      );
      wrapper.find("button").simulate("click");
      expect(onClickStub).not.toBeCalled;
    });
  });
};

export default buttonTest;
