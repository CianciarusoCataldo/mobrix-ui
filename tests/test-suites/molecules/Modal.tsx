import React from "react";
import { mount } from "enzyme";
import { Modal } from "../../../src";

const modalTest = () => {
  describe("Modal", () => {
    test("Rendering test", () => {
      let wrapper = mount(
        <Modal unstyled>
          <p>Modal content</p>
        </Modal>
      );
      expect(wrapper);

      wrapper = mount(
        <Modal overlayClassName="test-classname" onFocusLost={() => { }}>
          <p>Modal content</p>
        </Modal>
      );
      expect(wrapper);
    });
  });
};

export default modalTest;
