import React from "react";
import { mount } from "enzyme";
import { DismissableCard } from "../../../src";

const cardTest = () => {
  describe("DismissableCard", () => {
    test("Rendering test", () => {
      const wrapper = mount(
        <DismissableCard
          header="Test header"
          body="Test body"
          footer="Test footer"
        >
          Test label
        </DismissableCard>
      );
      expect(wrapper);
    });

    test("If dismissable === true, clicking on the X icon trigger the onClose callback", () => {
      const onCloseStub = jest.fn();

      const wrapper = mount(<DismissableCard onClose={onCloseStub} />);

      wrapper.find('[data-mbx-scl*="dis-bt"]').at(0).simulate("click");
      expect(onCloseStub).toBeCalled;
    });
  });
};

export default cardTest;
