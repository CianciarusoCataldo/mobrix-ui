import React from "react";
import { mount } from "enzyme";
import { ExpandableContainer } from "../../../src";

const expandableContainerTest = () => {
  describe("ExpandableContainer", () => {
    test("Rendering test", () => {
      let wrapper = mount(
        <ExpandableContainer arrowPosition="top">
          Test Container
        </ExpandableContainer>
      );
      wrapper.find('[data-mbx-id="icb"]').simulate("click");
      expect(wrapper);

      wrapper = mount(
        <ExpandableContainer
          //@ts-ignore
          arrowPosition="wrong"
        >
          Test Container
        </ExpandableContainer>
      );
      wrapper.find('[data-mbx-id="icb"]').simulate("click");
      expect(wrapper);
    });
    test("Clicking on the arrow button trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      let wrapper = mount(
        <ExpandableContainer
          expanded={<div key="expanded_test">Expanded test content</div>}
          onChange={onChangeStub}
        >
          Test Container
        </ExpandableContainer>
      );
      wrapper.find('[data-mbx-id="icb"]').simulate("click");
      expect(onChangeStub).toBeCalled;
    });
  });
};

export default expandableContainerTest;
