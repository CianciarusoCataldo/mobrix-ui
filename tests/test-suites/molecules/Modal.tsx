import React from "react";
import { mount } from "enzyme";
import { Modal } from "../../../src";

const modalTest = () => {
  describe("Modal", () => {
    test("Rendering test", () => {
      const onCloseStub = jest.fn();

      let wrapper = mount(
        <Modal onKeyDown={onCloseStub}>
          <p>Modal content</p>
        </Modal>
      );
      expect(wrapper);

      wrapper = mount(
        <Modal onClose={onCloseStub}>
          <p>Modal content</p>
        </Modal>
      );
      wrapper.find('[data-mbx-id="icb"]').simulate("click");
      expect(onCloseStub).toBeCalled;
      wrapper
        .find('[data-mbx-id="mod"]')
        .simulate("keyDown", { code: "Escape" });
      expect(onCloseStub).toBeCalled;
    });

    test("Focus lost test", () => {
      const onCloseStub = jest.fn();

      let wrapper = mount(
        <Modal onClose={onCloseStub}>
          <p>Modal content</p>
        </Modal>
      );
      wrapper.find("[data-mbx-dchead]").simulate("click");
      expect(wrapper);
    });
  });
};

export default modalTest;
