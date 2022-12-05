import React from "react";
import { mount } from "enzyme";
import { Modal } from "../../../src";

const modalTest = () => {
  describe("Modal", () => {
    test("Rendering test", () => {
      let wrapper = mount(
        <Modal>
          <p>Modal content</p>
        </Modal>
      );
      expect(wrapper);

      wrapper = mount(
        <Modal overlayClassName="test-classname" onFocusLost={() => {}}>
          <p>Modal content</p>
        </Modal>
      );
      wrapper.find('[data-id="card_dismiss_button"]').simulate("click");
      expect(wrapper);
    });

    test("Clicking on the X icon trigger the onClose callback", () => {
      const onCloseStub = jest.fn();
      let wrapper = mount(
        <Modal overlayClassName="test-classname" onClose={onCloseStub}>
          <p>Modal content</p>
        </Modal>
      );
      wrapper.find('[data-id="card_dismiss_button"]').simulate("click");
      expect(onCloseStub).toBeCalled;
    });
  });
};

export default modalTest;
