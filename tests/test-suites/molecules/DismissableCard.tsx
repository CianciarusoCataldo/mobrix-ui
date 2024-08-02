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
          headerProps={{}}
        >
          Test label
        </DismissableCard>
      );
      expect(wrapper);
    });

    test("If dismissable === true, clicking on the X icon trigger the onClose callback", () => {
      const onCloseStub = jest.fn();

      const wrapper = mount(<DismissableCard onClose={onCloseStub} />);

      wrapper
        .find('[data-mbx-id="cn"]')
        .at(0)
        .find('[data-mbx-id="icb"]')
        .simulate("click");
      expect(onCloseStub).toBeCalled;
    });
  });
};

export default cardTest;
