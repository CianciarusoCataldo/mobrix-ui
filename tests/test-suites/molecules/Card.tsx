import React from "react";
import { mount } from "enzyme";
import { Card } from "../../../src";

const cardTest = () => {
  describe("Card", () => {
    test("Rendering test", () => {
      const wrapper = mount(
        <Card header="Test header" body="Test body" footer="Test footer">
          Test label
        </Card>
      );
      expect(wrapper);
    });

    test("If dismissable === true, clicking on the X icon trigger the onClose callback", () => {
      const onCloseStub = jest.fn();

      const wrapper = mount(<Card onClose={onCloseStub} dismissable />);

      wrapper.find(".card-dismiss-button").at(0).simulate("click");
      expect(onCloseStub).toBeCalled;
    });
  });
};

export default cardTest;
