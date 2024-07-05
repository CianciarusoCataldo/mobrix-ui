import React from "react";
import { mount } from "enzyme";
import { Modal } from "../../../src";

const modalTest = () => {
  describe("Modal", () => {
    test("Rendering test", () => {
      const onCloseStub = jest.fn();

      let wrapper = mount(
        <Modal>
          <p>Modal content</p>
        </Modal>
      );
      wrapper.find('[data-mbx-scl*="dis-bt"]').simulate("click");
      expect(wrapper);

      wrapper = mount(
        <Modal onClose={onCloseStub}>
          <p>Modal content</p>
        </Modal>
      );
      wrapper.find('[data-mbx-scl*="dis-bt"]').simulate("click");
      expect(onCloseStub).toBeCalled;
    });
  });
};

export default modalTest;
